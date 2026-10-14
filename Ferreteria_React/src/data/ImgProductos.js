const fotos = import.meta.glob("../assets/img*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
})
 

const urlPorArchivo = {}
Object.keys(fotos).forEach((ruta) => {
  const archivo = ruta.split("/").pop().toLowerCase()
  urlPorArchivo[archivo] = fotos[ruta]
})
 
// Código del producto -> nombre del archivo de su foto
const archivoPorCodigo = {
  // Mat. Construcción
  MC001: "Polpaico.webp",
  MC002: "Melon.webp",
  MC003: "MorteroCeramico.webp",
  MC004: "MorteroNivelador.webp",
  MC005: "arenaFina.webp",
  MC006: "Ripio.png",
  MC007: "LadrilloFiscal.webp",
  MC008: "LadrilloPrensado.webp",
  MC009: "bloqueHormigon.jpg",
  MC010: "BloqueLiviano.jpg",
  // Pinturas
  PT001: "LatexInteriorBlanco.webp",
  PT002: "LatexInterior4ltrs.webp",
  PT003: "LatexExterior1lt.webp",
  PT004: "esmalteSintetico14.jpg",
  PT005: "esmalteSintetico.jpg",
  PT006: "antihumedad.webp",
  PT007: "RodilloLana23.jpg",
  PT008: "Brocha3.png",
  PT009: "cEnmascarar.webp",
  // Herramientas
  HM001: "mCarpintero.webp",
  HM002: "AlicateUniversal8.webp",
  HM003: "DestornilladorPlano.jpg",
  HM004: "dPhillipsPH2.webp",
  HM005: "LlaveAjustable10.webp",
  HM006: "Hexagonales9.jpg",
  HM007: "Serrucho20x7.webp",
  HM008: "Nburbuja60.png",
  HM009: "MetroTela.webp",
  HM010: "Cmetrica8M.webp",
  HE001: "TaladroPercutor.jpg",
  HE002: "Atornillador12v.webp",
  HE003: "Amoladora800w.jpg",
  HE004: "sCircular1200w.webp",
  HE005: "LijadoraOrbital.webp",
  HE006: "Caladora.webp",
  // Gasfitería
  GS001: "canieriaPVC12.webp",
  GS002: "cPVC34.jpg",
  GS003: "cCobre12.jpg",
  GS004: "CodoPVC1290.jpg",
  GS005: "TPVC12.webp",
  GS006: "uDoblePVC12.jpg",
  GS007: "llPasoEsfera12.webp",
  GS008: "llPasoEsfera34.jpg",
  GS009: "gLavamanosCromo.webp",
  GS010: "gCocinaAlto.webp",
  GS011: "Teflon34.jpg",
  GS012: "SiliconaTransparente280.webp",
  // Electricidad
  EL001: "Unipolar1.5mm2.webp",
  EL002: "Unipolar2.5mm2.webp",
  EL003: "duplexPararelo2x1.5.jpg",
  EL004: "EnchufeEmpotrado16A.webp",
  EL005: "Enchufe2ble16A.jpg",
  EL006: "InterruptorSimple.jpg",
  EL007: "Interruptor2ble.webp",
  EL008: "tableroElectrico4.png",
  EL009: "TermomagneticoUnipolar16A.webp",
  EL010: "TermomagneticoUnipolar25A.jpg",
  EL011: "AmpolletaFria9w.webp",
  EL012: "AmpolletaCalida12w.jpg",
  EL013: "PanelEmpotrado18w.jpg",
  // Tornillería
  TR001: "tAutoperforante8x1.webp",
  TR002: "tMadera4x40.webp",
  TR003: "tVolcanita3.5x25.webp",
  TR004: "tacoFisherS6.jpg",
  TR005: "tacoFisherS8.jpg",
  TR006: "PernoHex38x2.webp",
  TR007: "PernoAnclaje10x100.webp",
  TR008: "AnclajeEpoxi300ml.jpg",
  // Madera
  MD001: "PinoCepillado1x3.jpg",
  MD002: "PinoCepillado2x4.jpg",
  MD003: "TerciadoEstruc18mm.webp",
  MD004: "MDF15mm.jpg",
  MD005: "OSB9mm.jpg",
  MD006: "Volcanita10mm12x24.webp",
  MD007: "VolcanitaHumeda10mm.jpg",
  // Seguridad
  SE001: "CascoSegBlanco.webp",
  SE002: "GuantesCueroL.webp",
  SE003: "AntiparrasClear.jpg",
  SE004: "MascarillaRespN95.webp",
  SE005: "Arnes1punto.webp",
  // Jardín
  JA001: "MangueraRiego34x25.webp",
  JA002: "MangueraExpandible30m.webp",
  JA003: "pRiego8Modos.jpg",
  JA004: "PalaRedondaMango.webp",
  JA005: "Rastrillo16Dientes.webp",
}
 

export const ImgProductos = {}
 
Object.keys(archivoPorCodigo).forEach((codigo) => {
  const url = urlPorArchivo[archivoPorCodigo[codigo].toLowerCase()]
  if (url) {
    ImgProductos[codigo] = url
  } else {
    console.warn(`Sin foto para ${codigo}: no se encontró ${archivoPorCodigo[codigo]}`)
  }
})
 
export default ImgProductos

