<template>
<div class="body_home">
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar">
      <div id="logo">
        <h1 class="logo"><img src="../assets/logo.png" class="logo_img">Administration<span class="subtext"><br/>saedbox v1.2</span></h1>
      </div>
      <div id="selection">
        <a href="/"><div class="box1" data-toggle="tooltip" data-placement="top" title="Applications"></div></a><a href="/"><div class="box2" data-toggle="tooltip" data-placement="top" title="Configuration"></div></a>
        <a href="/"><div class="box3" data-toggle="tooltip" data-placement="bottom" title="Gestion Utilisateurs"></div></a><a href="/"><div class="box4" data-toggle="tooltip" data-placement="bottom" title="Profil"></div></a>
      </diV>
      <ul class="nav nav-sidebar">
        <li><span class="titre_menu">Applications installées</span></a></li>
        <li><a href="#" class="green-tooltip" data-toggle="tooltip" data-html="true" data-placement="right" title="ip.local/rutorrent"><i class="fa fa-arrow-down ru" aria-hidden="true"></i>&nbsp;Rutorrent</a></li>
        <li><a href="#">CouchPotato</a></li>
        <li><a href="#">Emby</a></li>
        <li><a href="#">Sickrage</a></li>
        <li><a href="#">Headphones</a></li>
        <li><a href="#">File Manager</a></li>
        <li><span class="titre_menu">Statistiques du serveur</span></a></li>
  <div id="system">
        <div class="text-xs-left" id="example-caption-1">CPU : {{ system.CPU.avgload }} %</div>
        <progress class="progress progress-success" value="cpu" max="100"></progress><br/>
        <div class="text-xs-left" id="example-caption-1">RAM :%</div>
        <progress class="progress progress-danger" value="ram" max="100"></progress>
        <div class="text-xs-left" id="example-caption-1"></div>
        <progress class="progress progress-success" value="disk" max="100"></progress>
  </div>
      </ul>
    </div>

  </div>
</div>
<router-view></router-view>
</div>
</template>

<script>
import System from '../utils/system'
import Auth from '../utils/auth'

export default {
  data: {
    system: {}
  },
  ready: function () {
    var self = this
    if (!Auth.checkAuth) {
      this.error = true
    } else {
      System.Get(function (response) {
        self.system = response
      })
    }
  }
}

</script>



<style>

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

html {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.body_home {
font-family: 'Source Sans Pro', sans-serif;
background-color: #f4f5f7;
overflow: hidden;
width: 100%;
height: 100%;
}

/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/*
 * Logo
 */

 #logo {
   height: 90px;
   background-color: #111118;
   padding-top: 20px;
   padding-left: 10px;
   margin-right: -20px;
   margin-left: -20px;
   margin-top: -20px;
   border-bottom: 1px solid #373737;
 }

 .logo {
   font-size : 24px;
   font-weight: bold;
   text-shadow: 1px 2px 1px black;
 }

 .logo_img {
   padding-left: 10px;
   padding-right: 30px;
 }

 .subtext {
   position: absolute;
   font-size : 12px;
   font-weight: bold;
   margin-left: -65px;
   margin-top: 25px;
   text-shadow: 1px 1px 1px black;
   color : #1d5d2c;
 }


/*
 * Selection
*/

 #selection {
   width: 300px;
   height: 160px;
   margin-left : -5px;
   margin-top: 25px;
 }

 .box1 {
   display: block;
   position: relative;
   width: 138px;
   height: 70px;
   background-color: #1d1c27;
   box-shadow: 1px solid black;
   float: left;
   border-top-left-radius: 4px;
   margin-left: -5px;
 }

 .box1:after {
  content: "\f022";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  position: absolute;
  font-size: 50px;
  color: white;
  top: 0%;
  left: 35%;
  z-index: 1;
}

 .box2 {
   display: block;
   position: relative;
   width: 138px;
   height: 70px;
   background-color: #1d1c27;
   box-shadow: 1px solid black;
   float: left;
   border-left: 2px solid #272634;
   border-top-right-radius: 4px;
 }

 .box2:after {
  content: "\f085";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  position: absolute;
  font-size: 50px;
  color: white;
  top: 0%;
  left: 30%;
  z-index: 1;
}

 .box3 {
   margin-left: -5px;
   margin-top: 2px;
   position: relative;
   width: 138px;
   height: 70px;
   background-color: #1d1c27;
   box-shadow: 1px solid black;
   float: left;
   border-bottom-left-radius: 4px;
 }

 .box3:after {
  content: "\f0c0";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  position: absolute;
  font-size: 50px;
  color: white;
  top: 0%;
  left: 30%;
  z-index: 1;
}

 .box4 {
   margin-top: 2px;
   position: relative;
   width: 138px;
   height: 70px;
   background-color: #1d1c27;
   box-shadow: 1px solid black;
   float: left;
   border-left: 2px solid #272634;
   border-bottom-right-radius: 4px;
 }

 .box4:after {
  content: "\f007";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  position: absolute;
  font-size: 50px;
  color: white;
  top: 0%;
  left: 35%;
  z-index: 1;
}

 .box1:hover {
   opacity: 0.5;
   transition: 1s;
 }

 .box2:hover {
   opacity: 0.5;
   transition: 1s;
 }

 .box3:hover {
   opacity: 0.5;
   transition: 1s;
 }

 .box4:hover {
   opacity: 0.5;
   transition: 1s;
 }

 /*
  * Titre de Menu
 */

 .titre_menu {
   font-size: 16px;
   padding-left: 20px;
   font-weight: bold;
   text-transform: uppercase;
   text-shadow: 0px 1px 0px black;
   color : #1d5d2c;
 }

/*
 * Sidebar
 */

/* Hide for mobile, show later */
.sidebar {
  display: none;
  width : 300px;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #272634;
    color : white;
  }
}

/* Sidebar navigation */

li {
  margin: 22px 0;
}

.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
  text-decoration: none;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  margin: 0 0 3px 0;
  padding-bottom: 10px;
  color : white;
  background-color: #1d1c27;
  text-decoration: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: none;
}

.nav-sidebar > li > a:hover {
 opacity: 0.5;
 transition: 0.5s;
}

.ru {
  color : #3e3ee6;
}

/*
 * Main content
 */

.main {
  padding: 0px;
  margin-left: 300px;
  background-color: #f4f5f7;
}

/*
 * Icons
 */

 div.check:before {
   content: "\f058";
   font-family: FontAwesome;
 }

 /*
  * Menubar
  */

 .main {
    overflow: hidden;
 }

 .menubar {
   width: 100%;
   height: 90px;
   position:fixed;
   overflow: hidden;
   background-color: white;
   box-shadow: 0 3px 2px -2px #c5c7dc;
   padding-top: 10px;
   padding-left: 10px;
 }

 .btn-primary {
   background-color: #43568a !important;
   border-color: #3d4e7d !important;
   margin-left: 5px;
 }

 .btn-primary-stop {
   color: white;
   background-color: #cd3434 !important;
   border-color: #b72f2f !important;
   margin-left: 5px;
 }

 .btn-primary:hover {
   color: #43568a;
   background-color: #fff !important;
   border-color: #43568a !important;
   transition: 0.5s;
 }

 .btn-primary-stop:hover {
   color: #cd3434;
   background-color: #fff !important;
   border-color: #cd3434 !important;
   transition: 0.5s;
 }

 .vr {
   width: 1px;
   height: 100%;
   border-left: 2px solid #e0e1e2;
   margin-left: 15px;
   margin-right: 10px;
 }

 .section_title {
   margin-top: 93px;
   position: absolute;
   height: 85px;
   width: 100%;
   background-color: #eff0f7;
   font-size: 24px;
   color : #787878;
 }

 .section_title_text {
   position: absolute;
   margin-left: 30px;
   margin-top: 10px;
   font-weight: bold;
   text-shadow: 2px 1px 2px white;
 }

 .section_title_subtext {
   position: absolute;
   font-size: 14px;
   margin-left: 30px;
   margin-top: 5px;
   font-weight: lighter;
 }

 .section_table {
   margin-top: 178px;
   position: absolute;
   height: 100%;
   width: 100%;
   background-color: white;
   font-size: 15px;
   color : #787878;
   padding-right:10%;
 }

 .thead-inverse th {
    background-color: #272634;
 }
 /* Statistiques */

 .progress {
   display: inline-block;
   margin-left: 15px;
   width: 250px;
   background-color: #e0e1e2 !important;
   padding-bottom: -20px;
 }

 .text-xs-left {
   font-size: 12px !important;
   margin-left: 15px;
   margin-top: -15px;
 }
</style>
