let app = new Vue({
            el: '#app',
            data: {
                cantfind: false,
                find: '',
                temp: '',
                currency: '',
                current: {
                    base: '',
                    date: '',
                    time_last_updated: '',
                    rates: {
                        USD: '',
                        EUR: '',
                    },
                },
                loading: true,
            },
            created() {
                this.exchange();
            },
                watch: 
                {
                    temp(value, oldvalue) 
                    {
                        this.exchange();
                    },
                },
                methods: {

                    exchange() {
                        this.loading = true;
                        console.log(this.test);
                        if (this.base == null)
                        {
                            console.log("if");
                            this.base = 'USD';
                        }
                        else
                        {
                            console.log("else");
                        }
                        axios.get('https://api.exchangerate-api.com/v4/latest/' + this.base) 
                            .then(response => {
                                this.cantfind = false;
                                this.current = response.data;
                                this.loading = false;
                                this.base = response.data.base;
                                console.log(this.base);
                                this.date = response.data.date;
                                return true;
                            })
                            .catch(error => {
                                this.cantfind = true;
                            });
                    },
                    search() {
                        this.base = this.currency;
                        this.temp = this.currency;
                        this.find = this.currency;
                        this.currency = '';
                    },

                }


            });
