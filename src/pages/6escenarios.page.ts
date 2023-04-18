import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class escenarios extends BasePage {
    
    //para mi primer escenario: crear 
    public crear1: string = '//div[@class="rCD_pjrvLRI_B_"]//p[text()="Crear"]';
    public creartablero1: string = '//div[@class="q2PzD_Dkq1FVX3 px-0"]//span[text()="Crear tablero"]';
    public botoncrear: string = '//button[@class="ijFumaLuInvBrL bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc"]';
    public titulotablero: string = '//input[@class="nch-textfield__input lsOhPsHuxEMYEb lsOhPsHuxEMYEb VkPAAkbpkKnPst"]';
     
    //para mi segundo escenario: crear plantilla

    public clicplantilla:string = '//button[@class="frrHNIWnTojsww TIF_ShUvocTxP7 bxgKMAm3lq5BpA SEj5vUdI3VvxDc"]//span[text()="Plantillas"]';
    public elegirplantilla:string='//button[@class="VSxlmEYC3befsX"]//div[text()="1-on-1 Meeting Agenda"]';
    public crearplantilla: string= '//button[@class="ijFumaLuInvBrL bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc"]';
        
    
    //para mi tercer escenario: crear plantilla por defecto de negocio del lado izquierdo
    public clicplantillaizquierdo:string = '//li[@class="WvATk6EiWx7jhz"]//span[text()="Plantillas"]';
    public clicnegocio: string='//li[@class="WvATk6EiWx7jhz"]//span[text()="Negocio"]';
    public cliceleccionlead:string='//div[@title="A Lead Management Pipeline by Crmble"]';
    public clicutilizarplantilla:string='//button[@class="R1FmqNQGU60Wlf bxgKMAm3lq5BpA SdamsUKjxSBwGb SEj5vUdI3VvxDc"]';
    public cliccrearplantillaizquierda:string='//input[@class="nch-button nch-button--primary wide js-submit"]';
    public cliccerrarpublicidad:string='//a[@class="plugin-chrome-close-button icon-lg icon-close js-close-plugin-chrome dark"]'

    //para mi cuarto escenario: Ir a vistas desde arriba y ver el calendario:
    public clicvistas:string = '//span[@class="boards-page-board-section-header-options-item-icon"]';
    public clicvercalendario:string = '//a[@title="Calendario"]';

    //mi quinto escenario
    public cliccambiodetema:string = '//span[@class="nch-icon A3PtEe1rGIm_yL J2CpPoHYfZ2U6i fAvkXZrzkeHLoc sUjcye4l126sbF"]//span[@data-testid="ThemeIcon"]';
    public clictemaoriginal:string = '//div[@class="M7m0uixhgvogAn"]';

   
    //mi sexto escenario
    public clicmiembros:string = '//span[@class="boards-page-board-section-header-options-item-name"]//span[text()="Miembros"]';
    public clicinvitados:string = '//a[text()="Invitados"]';
    
    constructor(){
        super();
    }

    //metodos de mi primer escenario
    async settitulotablero(text: string) {        
        await ElementActions.setText(this.titulotablero, text);
    }

    async clickcrear() {
        await ElementActions.click(this.botoncrear);
    }

    async crear(crearInput: string) {
        await ElementActions.setText(this.crear1, crearInput);
        
        await ElementActions.click(this.botoncrear);
    }
    //metodos segundo escenario: 
    
    async clickplantilla() {
        await ElementActions.click(this.clicplantilla);
    }

    async clickelegirplantilla() {
        await ElementActions.click(this.elegirplantilla);
    }

    async clickcrearplantilla() {
        await ElementActions.click(this.crearplantilla);
    }

    //metodos tercer escenario




}

export const escenario = new escenarios();