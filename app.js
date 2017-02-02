new Vue({
            el: '#system',
            data: {
                cpu: [],
				        ram: []
            },
            created: function () {
                this.getData();
				        setInterval(function () {
                  this.getData();
				        }.bind(this), 3000);
            },

            methods: {
					getData: function () {
                    var cpu = [];
                    this.$http.get('http://localhost:9000/api/system').then(response => {
                        this.$set(this, 'cpu', Math.round(response.body.data.CPU.avgload));
						            this.$set(this, 'ram', response.body.data.RAM.percentage_used);
                        console.log(response.status);
                    }, response => {
                        console.log(response);
                    });
                }
			}
        });
