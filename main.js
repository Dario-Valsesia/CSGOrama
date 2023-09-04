const app = Vue.createApp({
    data(){
        return{
            cartas:[
                {
                    url:"./img/ak47.png",
                    nombre: "AK-47",
                    id:1,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/Cuchi.png",
                    nombre: "CUCHI",
                    id:2,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/Famas.png",
                    nombre: "FAMAS",
                    id:3,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/Five.png",
                    nombre: "FIVE-SEVEN",
                    id:4,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/Galil.png",
                    nombre: "GALIL",
                    id:5,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/Mac.png",
                    nombre: "MAC-10",
                    id:6,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/P90.png",
                    nombre: "P90",
                    id:7,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/USP.png",
                    nombre: "USP",
                    id:8,
                    numero:0,
                    seleccionada: false,
                    duplicado: false,
                },
                {
                    url:"./img/ak47.png",
                    nombre: "AK-47",
                    id:1,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/Cuchi.png",
                    nombre: "CUCHI",
                    id:2,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/Famas.png",
                    nombre: "FAMAS",
                    id:3,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/Five.png",
                    nombre: "FIVE-SEVEN",
                    id:4,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/Galil.png",
                    nombre: "GALIL",
                    id:5,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/Mac.png",
                    nombre: "MAC-10",
                    id:6,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/P90.png",
                    nombre: "P90",
                    id:7,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
                {
                    url:"./img/USP.png",
                    nombre: "USP",
                    id:8,
                    numero:0,
                    seleccionada: false,
                    duplicado: true,
                },
            ],
            tarjetasSeleccionadas:[],
            cartaSeleccionada:{},
            cantidadCorrectos:0,
            verCartel:false,
            contadorClicks:0,
            verTablero:false,
            idGanadores: [],
        }
    },
    created(){
        this.prueba();
    },
    methods:{
        prueba(){
            this.cartas.forEach(carta => {
                carta.numero = Math.floor(Math.random()*10);
            });
            this.cartas.sort((a,b)=>{
                if(a.numero<b.numero){
                    return -1
                }
                if(a.numero>b.numero){
                    return 1
                }
                return 0
            })
            return this.cartas;
        },
        rotar(e){
           
            let tarjeta = e.target.closest('.tarjeta');
            let dataId = tarjeta.dataset.id
            let carta;
            if(tarjeta.classList.contains('d')){
                carta = this.cartas.filter(carta=>carta.duplicado == true && carta.id == dataId)
                
            }else{
                carta = this.cartas.filter(carta=>carta.duplicado == false && carta.id == dataId) 
            }

            let id = this.idGanadores.filter(idGanador => idGanador == carta[0].id)
            
            if(id ==false){
                carta[0].seleccionada = true;

                if (this.tarjetasSeleccionadas.length==0){
                    this.contadorClicks++  
                    tarjeta.classList.add('girar');
                    this.cartaSeleccionada = carta;
                    this.tarjetasSeleccionadas.push(tarjeta)
                }else{ 
                    if(carta[0].id == this.cartaSeleccionada[0].id && carta[0] != this.cartaSeleccionada[0]){
                        tarjeta.classList.add('girar');
                        this.contadorClicks++
                        this.idGanadores.push(carta[0].id)
                        this.tarjetasSeleccionadas = [];
                        this.cartaSeleccionada = {};
                        this.cantidadCorrectos++
                    }
                    else if(carta[0].id != this.cartaSeleccionada[0].id){
                        tarjeta.classList.add('girar');
                        this.contadorClicks++
                        setTimeout(()=>{                         
                            this.cartaSeleccionada={};
                            this.tarjetasSeleccionadas[0].classList.remove('girar')
                            tarjeta.classList.remove('girar'); 
                            this.tarjetasSeleccionadas = [];              
                        },600)
                    }                
                }    

            }else{
                console.log("repite");
            }

                        

            
                                   
        },     
        jugar(){
            this.verTablero = true;
        },
        
    },
    computed:{
        rango(){
            if(this.contadorClicks <= 18){
                return "Global Elite"
            }
            if(this.contadorClicks <= 20){
                return "Supreme Master"
            }
            if(this.contadorClicks <= 22){
                return "Legendary Eagle"
            }
            if(this.contadorClicks <= 26){
                return "Master Guardian Elite"
            }
            if(this.contadorClicks <= 30){
                return "Master Guardian I"
            }
            if(this.contadorClicks <= 36){
                return "Gold Nova II"
            }
            if(this.contadorClicks <= 40){
                return "Silver Elite"
            }
            if(this.contadorClicks>40){
                return "Silver I"
            }
        },
        rangoImagen(){
            if(this.contadorClicks <= 18){
                return "./img/iconos/IconoGlobal.png"
            }
            if(this.contadorClicks <= 20){
                return "./img/iconos/IconoSupremo.png"
            }
            if(this.contadorClicks <= 22){
                return "./img/iconos/IconoAguila.png"
            }
            if(this.contadorClicks <= 26){
                return "./img/iconos/IconoAkCruzada.png"
            }
            if(this.contadorClicks <= 30){
                return "./img/iconos/IconoAk.png"
            }
            if(this.contadorClicks <= 36){
                return "./img/iconos/IconoNova2.png"
            }
            if(this.contadorClicks <= 40){
                return "./img/iconos/IconoSilverElite.png"
            }
            if(this.contadorClicks>40){
                return "./img/iconos/IconoSilver1.png"
            }
        }
    }
})

let mount = app.mount('#app');