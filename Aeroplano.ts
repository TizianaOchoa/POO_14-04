class Turbina {
    private numTurbinas: number = 0;

    public constructor(n: number) {
        this.numTurbinas = n;
    }

    public toString(): string {
        return this.numTurbinas + " turbina/s";
    }
}

class Helice {
    private numHelices: number = 0;

    public constructor(n: number) {
        this.numHelices = n;
    }

    public toString(): string {
        return this.numHelices + " hélice/s";
    }
}

class TrenDeAterrizaje {
    private numNeumaticos: number = 0;
    private numAmortiguadores: number = 0;
    private esRetractil: boolean = false;

    public constructor(a: number, b: number, c: boolean) {
        this.numNeumaticos = a;
        this.numAmortiguadores = b;
        this.esRetractil = c;
    }

    public toString(): string {
        let mensaje: string = "Tren de Aterrizaje: ";
        mensaje += this.esRetractil ? "Retráctil, " : "Fijo, ";
        mensaje += this.numNeumaticos + " neumáticos, ";
        mensaje += this.numAmortiguadores + " amortiguadores";
        return mensaje;
    }
}

class Cubierta {
    private cabinaTripulacion: boolean = false;
    private cabinaVuelo: boolean = false;
    private sistemaEmergencia: boolean = false;
    private numTanquesCombustible: number = 0;
    private numPuertasSalidas: number = 0;

    public constructor(
        pCabinaTripulacion: boolean,
        pCabinaVuelo: boolean,
        pSistemaEmergencia: boolean,
        pTanquesCombustible: number,
        pPuertasSalida: number
    ) {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public toString(): string {
        let mensaje = "Cubierta: ";
        if (this.cabinaVuelo) mensaje += "Cabina de Vuelo, ";
        if (this.cabinaTripulacion) mensaje += "Cabina de Tripulación, ";
        if (this.sistemaEmergencia) mensaje += "Sistema de Emergencia, ";
        mensaje += this.numTanquesCombustible + " tanques, ";
        mensaje += this.numPuertasSalidas + " puertas";
        return mensaje;
    }
}

class Alas {
    private numAlasFrente: number = 0;
    private numAlasCola: number = 0;

    public constructor(mAlasFrente: number, nAlasCola: number) {
        this.numAlasFrente = mAlasFrente;
        this.numAlasCola = nAlasCola;
    }

    public toString(): string {
        return "Alas: Frontales=" + this.numAlasFrente + ", Traseras=" + this.numAlasCola;
    }
}

//AGREGACIÓN

class Piloto {
    constructor(public nombre: string) {}

    public toString(): string {
        return "Piloto: " + this.nombre;
    }
}

//CLASE PRINCIPAL (COMPOSICIÓN + AGREGACIÓN)

class Aeroplano {
    private helice: Helice;
    private trenAterrizaje: TrenDeAterrizaje;
    private alas: Alas;
    private cubierta: Cubierta;

    // Agregación
    private piloto?: Piloto;

    constructor(
        phelice: Helice,
        pTrenAterrizaje: TrenDeAterrizaje,
        pAlas: Alas,
        pCubierta: Cubierta
    ) {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }

    public asignarPiloto(p: Piloto) {
        this.piloto = p;
    }

    public toString(): string {
        let mensaje = "Aeroplano compuesto por:\n";
        mensaje += "- " + this.helice.toString() + "\n";
        mensaje += "- " + this.alas.toString() + "\n";
        mensaje += "- " + this.trenAterrizaje.toString() + "\n";
        mensaje += "- " + this.cubierta.toString();

        if (this.piloto) {
            mensaje += "\n- " + this.piloto.toString();
        }

        return mensaje;
    }
}

//ASOCIACIÓN

class TorreControl {
    autorizarDespegue(a: Aeroplano) {
        console.log("Torre de Control: Despegue autorizado");
    }
}

//DEPENDENCIA

class Mecanico {
    reparar(a: Aeroplano) {
        console.log("Mecánico: Aeroplano en reparación");
    }
}


//EJECUCIÓN

// Componentes (composición)
let helice = new Helice(3);
let trenAterrizaje = new TrenDeAterrizaje(2, 3, true);
let alas = new Alas(2, 3);
let cubierta = new Cubierta(true, true, true, 4, 4);

// Aeroplano
let aeroplano = new Aeroplano(helice, trenAterrizaje, alas, cubierta);

// Agregación
let piloto = new Piloto("Juan Pérez");
aeroplano.asignarPiloto(piloto);

// Mostrar en consola
console.log(aeroplano.toString());

// Asociación
let torre = new TorreControl();
torre.autorizarDespegue(aeroplano);

// Dependencia
let mecanico = new Mecanico();
mecanico.reparar(aeroplano);