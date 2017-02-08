# Ensure we have npm
if ! hash npm 2>/dev/null; then
  echo 'No NPM installed!'
  exit 1
fi

FILEPATH="node_modules/bootstrap-loader/lib/utils/buildExtractStylesLoader.js"

BEFORE="return ExtractTextPlugin.extract({ fallbackLoader: fallbackLoader, loader: restLoaders });"
AFTER="return [ ExtractTextPlugin.loader().loader + '?omit\&remove',    fallbackLoader,    restLoaders  ].join('!');"

if ! cat ${FILEPATH} 2>/dev/null | grep -q "${AFTER}"; then
  echo 'Fixing bootstrap-loader.'
  sed -i.bak "s|${BEFORE}|${AFTER}|g" "${FILEPATH}"
fi
