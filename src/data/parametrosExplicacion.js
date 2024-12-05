const parametrosExplicacion = {
    'Eritrocitos (RBC)': {
        alto: 'Un nivel alto de eritrocitos puede estar asociado con deshidratación severa, enfermedades pulmonares crónicas como la EPOC, o incluso exposición a altitudes elevadas, donde el cuerpo produce más eritrocitos para compensar la menor disponibilidad de oxígeno.',
        bajo: 'Un nivel bajo de eritrocitos puede ser causado por anemia, pérdida de sangre aguda o crónica, deficiencia de hierro, vitamina B12 o ácido fólico, enfermedades renales o incluso trastornos que afectan la producción en la médula ósea.'
    },
    'Hemoglobina (HGB)': {
        alto: 'Niveles elevados de hemoglobina pueden sugerir policitemia vera, deshidratación o vivir a grandes altitudes. También puede estar relacionado con trastornos cardíacos o pulmonares crónicos que reducen el oxígeno en la sangre.',
        bajo: 'Un nivel bajo de hemoglobina sugiere anemia, que puede ser causada por deficiencia nutricional, enfermedades crónicas como insuficiencia renal, o pérdidas de sangre significativas.'
    },
    'Hematocrito (HCT)': {
        alto: 'Un hematocrito elevado puede indicar deshidratación, enfermedades pulmonares, problemas cardíacos o un trastorno llamado policitemia vera. En algunos casos, también puede ser una respuesta normal a altitudes elevadas.',
        bajo: 'Un hematocrito bajo puede ser indicativo de anemia, deficiencia de hierro, sangrado o trastornos en la médula ósea.'
    },
    'MCV (VCM)': {
        alto: 'Un nivel alto de MCV indica que los glóbulos rojos son más grandes de lo normal, lo que suele estar asociado con anemia megaloblástica, deficiencia de vitamina B12 o ácido fólico, o enfermedades hepáticas.',
        bajo: 'Un nivel bajo de MCV refleja glóbulos rojos más pequeños de lo normal, frecuentemente asociado con anemia microcítica por deficiencia de hierro o enfermedades crónicas.'
    },
    'MCH (HCM)': {
        alto: 'Un valor alto de MCH puede ser indicativo de anemia macrocítica debido a deficiencia de vitamina B12 o folato, o enfermedades hepáticas.',
        bajo: 'Un nivel bajo de MCH sugiere anemia microcítica, comúnmente causada por deficiencia de hierro o talasemia.'
    },
    'MCHC (CHCM)': {
        alto: 'Un nivel alto de MCHC puede estar relacionado con esferocitosis hereditaria, una condición genética que afecta la forma y la densidad de los glóbulos rojos.',
        bajo: 'Un nivel bajo de MCHC suele asociarse con anemia hipocrómica, que puede ser causada por deficiencia de hierro o enfermedades crónicas.'
    },
    'RDW (ADE)': {
        alto: 'Un RDW alto indica una variación significativa en el tamaño de los glóbulos rojos, lo cual puede ser un indicador temprano de deficiencias de hierro, vitamina B12 o folato, anemia perniciosa, o incluso hemoglobinopatías.',
        bajo: 'Un RDW bajo es poco común y generalmente no se considera clínicamente significativo.'
    },
    'Leucocitos (WBC)': {
        alto: 'Un recuento alto de leucocitos puede ser signo de infecciones bacterianas, inflamación aguda, estrés físico o emocional extremo, o incluso leucemia.',
        bajo: 'Un recuento bajo de leucocitos puede reflejar infecciones virales, enfermedades autoinmunes como lupus, o problemas en la médula ósea como aplasia.'
    },
    'Neutrófilos segmentados (NEU)': {
        alto: 'Un nivel alto de neutrófilos puede ser una respuesta a infecciones bacterianas, inflamación aguda, o estrés fisiológico como quemaduras o cirugía.',
        bajo: 'Un nivel bajo de neutrófilos puede indicar neutropenia, frecuentemente asociada con infecciones virales, tratamientos de quimioterapia o enfermedades autoinmunes.'
    },
    'Linfocitos (LYM)': {
        alto: 'Un nivel elevado de linfocitos puede sugerir infecciones virales como mononucleosis o citomegalovirus, así como ciertos tipos de leucemia o linfoma.',
        bajo: 'Un nivel bajo de linfocitos puede ser causado por infecciones bacterianas severas, inmunosupresión, o tratamientos como quimioterapia o radioterapia.'
    },
    'Monocitos (MON)': {
        alto: 'Un aumento en los monocitos puede estar relacionado con infecciones crónicas como tuberculosis, enfermedades autoinmunes o ciertos tipos de leucemia.',
        bajo: 'Un nivel bajo de monocitos es raro y, en la mayoría de los casos, no se considera clínicamente relevante.'
    },
    'Eosinófilos (EOS)': {
        alto: 'Un recuento alto de eosinófilos puede ser indicativo de alergias, infecciones parasitarias o enfermedades inflamatorias crónicas como el asma.',
        bajo: 'Un nivel bajo de eosinófilos es normal en la mayoría de los casos, pero puede observarse durante el estrés extremo o el uso de corticosteroides.'
    },
    'Basófilos (BAS)': {
        alto: 'Un aumento en los basófilos puede ser señal de reacciones alérgicas, infecciones parasitarias o enfermedades hematológicas como leucemia mieloide crónica.',
        bajo: 'Un nivel bajo de basófilos suele ser clínicamente insignificante y puede observarse durante episodios de estrés agudo.'
    },
    'Plaquetas (PLT)': {
        alto: 'Un recuento alto de plaquetas puede sugerir inflamación, infecciones crónicas o trastornos mieloproliferativos como la trombocitosis esencial.',
        bajo: 'Un recuento bajo de plaquetas puede deberse a enfermedades autoinmunes, infecciones virales o problemas de médula ósea como la trombocitopenia.'
    },
    'Volumen plaquetario medio (MPV)': {
        alto: 'Un MPV alto puede reflejar una mayor producción de plaquetas en la médula ósea, lo cual podría asociarse con enfermedades autoinmunes o trastornos mieloproliferativos.',
        bajo: 'Un MPV bajo puede indicar una disminución en la producción de plaquetas, posiblemente por enfermedades autoinmunes o daño a la médula ósea.'
    }
}

export default parametrosExplicacion
