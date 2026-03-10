const data = {
  name: "Regjeringen (Statsministeren / SMK)", status: "none",
  children: [
    {
      name: "Forsvarsdepartementet (FD)", status: "none",
      children: [
        {
          name: "Forsvarssjefen / FOH", status: "none",
          children: [
            {
              name: "Hæren", status: "none",
              children: [
                {
                  name: "Brigade Nord (Indre Troms)", status: "none",
                  children: [
                    { name: "Panserbataljonen", status: "none" },
                    { name: "2. bataljon (mek. infanteri)", status: "none" },
                    { name: "Artilleribataljonen", status: "none" },
                    { name: "Ingeniørbataljonen", status: "none" },
                    { name: "Sambandsbataljonen", status: "none" },
                    { name: "Stridstrenbataljonen (logistikk)", status: "none" },
                    { name: "Sanitetsbataljonen", status: "none" }
                  ]
                },
                {
                  name: "Finnmarksbrigaden", status: "none",
                  children: [
                    { name: "Lett infanteribataljon", status: "none" },
                    { name: "Artilleriavdeling", status: "none" },
                    { name: "Luftvernavdeling", status: "none" },
                    { name: "Ingeniøravdeling", status: "none" },
                    { name: "Etterretningsavdeling", status: "none" }
                  ]
                },
                {
                  name: "Brigade Sør (Østerdalen) – under oppbygging", status: "none",
                  children: [
                    { name: "Reservistbaserte manøverbataljoner", status: "none" }
                  ]
                },
                { name: "Etterretningsregimentet", status: "none" },
                { name: "Militærpolitiregimentet", status: "none" },
                { name: "Hærens våpenskole", status: "none" }
              ]
            },
            {
              name: "Sjøforsvaret", status: "none",
              children: [
                {
                  name: "Marinen", status: "none",
                  children: [
                    { name: "Fregattvåpenet (Fridtjof Nansen-kl., 4 fregatter)", status: "none" },
                    { name: "Korvettskvadronen (Skjold-kl., 6 korvetter)", status: "none" },
                    { name: "Undervannsbåtvåpenet (Ula-kl. → 212CD)", status: "none" },
                    { name: "Minevåpenet (Oksøy/Alta-kl.)", status: "none" },
                    { name: "Logistikkvåpenet (KNM Maud m.fl.)", status: "none" },
                    { name: "Sjøforsvarets forsyningskommando (SFK)", status: "none" }
                  ]
                },
                {
                  name: "Kystvakten", status: "none",
                  children: [
                    { name: "Ytre kystvakt (Nordkapp-kl., Barentshav-kl.)", status: "none" },
                    { name: "Indre kystvakt (Nornen-kl.)", status: "none" }
                  ]
                }
              ]
            },
            {
              name: "Luftforsvaret", status: "none",
              children: [
                {
                  name: "132 Luftving (Ørland) – F-35 hovedbase", status: "none",
                  children: [
                    { name: "331 skvadron (F-35)", status: "none" },
                    { name: "332 skvadron (F-35)", status: "none" },
                    { name: "Baseforsvarsskvadron", status: "none" },
                    { name: "Luftvernbataljon (NASAMS)", status: "none" }
                  ]
                },
                {
                  name: "133 Luftving (Evenes) – QRA/maritim", status: "none",
                  children: [
                    { name: "F-35 QRA-detasjement", status: "none" },
                    { name: "333 skvadron (P-8 Poseidon)", status: "none" },
                    { name: "Baseforsvarsbataljon", status: "none" },
                    { name: "Luftvernbataljon", status: "none" }
                  ]
                },
                {
                  name: "134 Luftving (Rygge)", status: "none",
                  children: [
                    { name: "339 skvadron (Bell 412)", status: "none" },
                    { name: "Luftforsvarsstaben", status: "none" }
                  ]
                },
                {
                  name: "131 Luftving (Sørreisa) – kontroll/varsling", status: "none",
                  children: [
                    { name: "Kontroll- og varslingsstasjoner (Vardø, Senja, Honningsvåg m.fl.)", status: "none" }
                  ]
                },
                {
                  name: "130 Luftving (Sola) – redningshelikopter", status: "none",
                  children: [
                    { name: "330 skvadron (AW101 SAR Queen)", status: "none" }
                  ]
                },
                { name: "335 skvadron (Gardermoen) – C-130J transport", status: "none" },
                { name: "337 skvadron (Bardufoss) – NH90 maritim", status: "none" },
                { name: "CAOC Bodø (NATO luftkommando)", status: "none" }
              ]
            },
            {
              name: "Heimevernet (HV)", status: "none",
              children: [
                { name: "HV-01 Oslofjord (Rygge)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-02 Oslo og Akershus (Lutvann)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-03 Telemark og Buskerud (Heistadmoen)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-05 Opplandske (Terningmoen)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-07 Agder (Kjevik) – under oppbygging", status: "none" },
                { name: "HV-08 Rogaland (Vatneleiren)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-09 Bergenhus (Bergenhus festning)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-11 Møre og Fjordane (Setnesmoen)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-12 Trøndelag (Værnes)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-14 Sør-Hålogaland (Drevjamoen)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-16 Nord-Hålogaland (Bjerkvik)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] },
                { name: "HV-17 Finnmark (Porsangmoen)", status: "none", children: [{ name: "HV-områder og innsatsstyrke", status: "none" }] }
              ]
            },
            {
              name: "Cyberforsvaret", status: "none",
              children: [
                { name: "Cyberforsvarets CIS-regiment", status: "none" },
                { name: "Cyberforsvarets IKT-tjenester", status: "none" },
                { name: "Cybersikkerhetssenteret", status: "none" }
              ]
            },
            {
              name: "Forsvarets spesialstyrker (FS)", status: "none",
              children: [
                { name: "Forsvarets spesialkommando (FSK)", status: "none" },
                { name: "Marinejegerkommandoen (MJK)", status: "none" }
              ]
            },
            {
              name: "Forsvarets sanitet (FSAN)", status: "none",
              children: [
                { name: "Sanitetsregimentet", status: "none" },
                { name: "Institutt for militær medisin", status: "none" }
              ]
            }
          ]
        },
        {
          name: "Etterretningstjenesten (E-tjenesten)", status: "none",
          children: [
            { name: "Signaletterretning", status: "none" },
            { name: "Menneskelig etterretning (HUMINT)", status: "none" },
            { name: "Cyberetterretning", status: "none" }
          ]
        },
        {
          name: "Forsvarsmateriell (FMA)", status: "none",
          children: [
            { name: "Kapasiteter: Land, Sjø, Luft, IKT", status: "none" }
          ]
        },
        {
          name: "Forsvarets forskningsinstitutt (FFI)", status: "none",
          children: [
            { name: "Forsvarsanalyse, sensor/EK, beskyttelse og beredskap", status: "none" }
          ]
        }
      ]
    },
    {
      name: "Justis- og beredskapsdepartementet (JD)", status: "none",
      children: [
        {
          name: "Politidirektoratet (POD)", status: "none",
          children: [
            {
              name: "Oslo politidistrikt", status: "none",
              children: [
                {
                  name: "Politimester og stab", status: "none",
                  children: [
                    { name: "Kommunikasjonsstab", status: "none" },
                    { name: "HR- og HMS-stab", status: "none" },
                    { name: "Virksomhetsstyringsstab", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for operativ tjeneste", status: "none",
                  children: [
                    { name: "Operasjonssentralen", status: "none" },
                    { name: "Ordensavdelinger", status: "none" },
                    { name: "Hundetjenesten", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for nasjonale beredskapsressurser (Taraldrud)", status: "none",
                  children: [
                    { name: "Beredskapstroppen («Delta»)", status: "none" },
                    { name: "Bombegruppen / Politiets bombetjeneste (CBRN)", status: "none" },
                    { name: "Politihelikoptertjenesten (AW169)", status: "none" },
                    { name: "Krise- og gisselforhandlertjenesten", status: "none" },
                    { name: "Seksjon for taktisk støtte", status: "none" }
                  ]
                },
                {
                  name: "Felles kriminalenhet", status: "none",
                  children: [
                    { name: "Seksjon for vold og seksualforbrytelser", status: "none" },
                    { name: "Seksjon for økonomisk kriminalitet", status: "none" },
                    { name: "Seksjon for organisert kriminalitet", status: "none" },
                    { name: "Seksjon for ungdomskriminalitet", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for etterretning og etterforskning", status: "none",
                  children: [
                    { name: "Etterretningsavdeling", status: "none" },
                    { name: "Analyseseksjon", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for forebygging", status: "none",
                  children: [
                    { name: "Forebyggende avdelinger", status: "none" },
                    { name: "SLT-koordinering", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for påtale", status: "none",
                  children: [
                    { name: "Påtaleseksjoner", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for utlending og forvaltning", status: "none",
                  children: [
                    { name: "Pass og våpenforvaltning", status: "none" },
                    { name: "Utlendingsseksjon", status: "none" }
                  ]
                },
                {
                  name: "Felles enhet for sivil rettspleie (Namsfogden)", status: "none",
                  children: [
                    { name: "Namsseksjon", status: "none" },
                    { name: "Gjeldsrådgivning", status: "none" }
                  ]
                },
                {
                  name: "Geografiske driftsenheter", status: "none",
                  children: [
                    { name: "Enhet sentrum (Grønland, Sentrum politistasjon)", status: "none" },
                    { name: "Enhet vest (Majorstuen, Asker, Bærum)", status: "none" },
                    { name: "Enhet øst (Oslo øst politistasjon, fra 2025)", status: "none" }
                  ]
                }
              ]
            },
            { name: "Øst politidistrikt", status: "none" },
            { name: "Innlandet politidistrikt", status: "none" },
            { name: "Sør-Øst politidistrikt", status: "none" },
            { name: "Agder politidistrikt", status: "none" },
            { name: "Sør-Vest politidistrikt", status: "none" },
            { name: "Vest politidistrikt", status: "none" },
            { name: "Møre og Romsdal politidistrikt", status: "none" },
            { name: "Trøndelag politidistrikt", status: "none" },
            { name: "Nordland politidistrikt", status: "none" },
            { name: "Troms politidistrikt", status: "none" },
            { name: "Finnmark politidistrikt", status: "none" },
            {
              name: "Kripos – Nasjonal enhet for alvorlig kriminalitet", status: "none",
              children: [
                {
                  name: "Etterforskningsavdelingen", status: "none",
                  children: [
                    { name: "Etterretningsseksjonen", status: "none" },
                    { name: "Seksjon for kalde saker («cold case»)", status: "none" },
                    { name: "Seksjon for organisert kriminalitet", status: "none" },
                    { name: "Seksjon for internettrelaterte seksuallovbrudd", status: "none" },
                    { name: "Voldsseksjonen", status: "none" }
                  ]
                },
                {
                  name: "Avdeling for kriminalteknikk og ID (NKL)", status: "none",
                  children: [
                    { name: "Seksjon for kriminalteknikk (åstedsundersøkelser)", status: "none" },
                    { name: "Seksjon for biometri og ansiktssammenligning", status: "none" },
                    { name: "Seksjon for DNA og narkotikaanalyse", status: "none" },
                    { name: "Seksjon for brann, kjemi og dokumenter", status: "none" },
                    { name: "Fingeravtrykksseksjonen", status: "none" }
                  ]
                },
                {
                  name: "Avdeling for fellesoperative tjenester", status: "none",
                  children: [
                    { name: "Desken (døgnbemannet responssenter)", status: "none" },
                    { name: "Seksjon for operativ etterforskningsbistand", status: "none" },
                    { name: "Seksjon for tilstedeværelse på internett", status: "none" },
                    { name: "Vitnebeskyttelse", status: "none" }
                  ]
                },
                {
                  name: "Nasjonalt cyberkrimsenter (NC3)", status: "none",
                  children: [
                    {
                      name: "Seksjon for elektroniske spor", status: "none",
                      children: [
                        { name: "Metodeutvikling", status: "none" },
                        { name: "Elektronikklab", status: "none" },
                        { name: "Kunstig intelligens og anvendt teknologi", status: "none" }
                      ]
                    },
                    { name: "Seksjon for datakriminalitet", status: "none" },
                    {
                      name: "Seksjon for seksuelle overgrep mot barn", status: "none",
                      children: [
                        { name: "Etterretning", status: "none" },
                        { name: "Innledende etterforskning", status: "none" },
                        { name: "Forebygging, ID og fagutvikling", status: "none" }
                      ]
                    },
                    { name: "Seksjon for etterforskningsbistand / bistandslab", status: "none" },
                    { name: "Seksjon for inntak og digital innsats", status: "none" }
                  ]
                },
                {
                  name: "Internasjonalt samarbeid", status: "none",
                  children: [
                    { name: "Interpol-seksjonen (NCB Oslo)", status: "none" },
                    { name: "Europol-seksjonen", status: "none" },
                    { name: "SIRENE-seksjonen (Schengen)", status: "none" }
                  ]
                },
                { name: "Retts- og påtaleavdelingen", status: "none" },
                {
                  name: "Administrasjon og stab", status: "none",
                  children: [
                    { name: "HR-seksjonen", status: "none" },
                    { name: "Kommunikasjonsstab", status: "none" },
                    { name: "Økonomiseksjon", status: "none" }
                  ]
                }
              ]
            },
            {
              name: "Økokrim", status: "none",
              children: [
                { name: "Etterforskningsavdeling (økonomisk kriminalitet)", status: "none" },
                { name: "Miljøkrimavdelingen", status: "none" },
                { name: "Utbytteseksjonen (inndragning)", status: "none" }
              ]
            },
            { name: "Politihøgskolen (PHS)", status: "none" },
            { name: "Utrykningspolitiet (UP)", status: "none" }
          ]
        },
        {
          name: "Politiets sikkerhetstjeneste (PST)", status: "none",
          children: [
            {
              name: "Kontraterroravdelingen", status: "none",
              children: [
                { name: "Islamistisk ekstremisme", status: "none" },
                { name: "Høyreekstremisme", status: "none" },
                { name: "Andre ekstremismemiljøer", status: "none" },
                { name: "Forebyggende tiltak og radikalisering", status: "none" }
              ]
            },
            {
              name: "Kontraetterretningsavdelingen", status: "none",
              children: [
                { name: "Spionasje og fremmed etterretning", status: "none" },
                { name: "Påvirkningsoperasjoner", status: "none" },
                { name: "Proliferasjon (masseødeleggelsesvåpen)", status: "none" }
              ]
            },
            {
              name: "Livvakttjenesten", status: "none",
              children: [
                { name: "Beskyttelse av regjeringen", status: "none" },
                { name: "Beskyttelse av Stortinget", status: "none" },
                { name: "Beskyttelse av andre truede personer", status: "none" }
              ]
            },
            {
              name: "Analyse- og etterretningsavdelingen", status: "none",
              children: [
                { name: "Trusselvurderinger (årlige og løpende)", status: "none" },
                { name: "Strategisk analyse", status: "none" },
                { name: "Situasjonsforståelse", status: "none" }
              ]
            },
            {
              name: "Operativ avdeling", status: "none",
              children: [
                { name: "Spaning og skjulte metoder", status: "none" },
                { name: "Teknisk innhenting", status: "none" }
              ]
            },
            {
              name: "Teknisk avdeling", status: "none",
              children: [
                { name: "IKT-sikkerhet og digitale verktøy", status: "none" },
                { name: "Teknisk støtte til operasjoner", status: "none" }
              ]
            },
            {
              name: "Administrativ avdeling", status: "none",
              children: [
                { name: "HR og kompetanse", status: "none" },
                { name: "Økonomi", status: "none" },
                { name: "Juridisk seksjon", status: "none" }
              ]
            },
            {
              name: "Regionale PST-enheter", status: "none",
              children: [
                { name: "PST Øst politidistrikt", status: "none" },
                { name: "PST Innlandet politidistrikt", status: "none" },
                { name: "PST Sør-Øst politidistrikt", status: "none" },
                { name: "PST Agder politidistrikt", status: "none" },
                { name: "PST Sør-Vest politidistrikt", status: "none" },
                { name: "PST Vest politidistrikt", status: "none" },
                { name: "PST Møre og Romsdal politidistrikt", status: "none" },
                { name: "PST Trøndelag politidistrikt", status: "none" },
                { name: "PST Nordland politidistrikt", status: "none" },
                { name: "PST Troms politidistrikt", status: "none" },
                { name: "PST Finnmark politidistrikt", status: "none" },
                { name: "PST Svalbard", status: "none" }
              ]
            }
          ]
        },
        {
          name: "Direktoratet for samfunnssikkerhet og beredskap (DSB)", status: "none",
          children: [
            {
              name: "Sivilforsvaret (20 distrikter, 281 innsatsenheter)", status: "none",
              children: [
                { name: "Oslo og Akershus", status: "none" },
                { name: "Østfold", status: "none" },
                { name: "Hedmark", status: "none" },
                { name: "Oppland", status: "none" },
                { name: "Buskerud", status: "none" },
                { name: "Vestfold", status: "none" },
                { name: "Telemark", status: "none" },
                { name: "Aust-Agder", status: "none" },
                { name: "Vest-Agder", status: "none" },
                { name: "Rogaland", status: "none" },
                { name: "Hordaland", status: "none" },
                { name: "Sogn og Fjordane", status: "none" },
                { name: "Møre og Romsdal", status: "none" },
                { name: "Sør-Trøndelag", status: "none" },
                { name: "Nord-Trøndelag", status: "none" },
                { name: "Nordland", status: "none" },
                { name: "Midtre Hålogaland", status: "none" },
                { name: "Troms", status: "none" },
                { name: "Vest-Finnmark", status: "none" },
                { name: "Øst-Finnmark", status: "none" }
              ]
            },
            { name: "Nødnett (nødkommunikasjonsinfrastruktur)", status: "none" },
            { name: "Norges brannskole", status: "none" },
            { name: "Nasjonalt utdanningssenter for samfunnssikkerhet", status: "none" },
            { name: "Eltilsyn (5 regionale kontorer)", status: "none" }
          ]
        },
        {
          name: "Nasjonal sikkerhetsmyndighet (NSM)", status: "none",
          children: [
            { name: "Nasjonalt cybersikkerhetssenter (NCSC)", status: "none" },
            { name: "Forebyggende sikkerhetstjeneste", status: "none" },
            { name: "Sikkerhetsklareringer", status: "none" }
          ]
        },
        {
          name: "Hovedredningssentralen (HRS)", status: "none",
          children: [
            { name: "HRS Nord-Norge (Bodø)", status: "none" },
            { name: "HRS Sør-Norge (Stavanger)", status: "none" }
          ]
        },
        {
          name: "Kriminalomsorgsdirektoratet", status: "none",
          children: [
            { name: "Fengslene (høy/lav sikkerhet)", status: "none" },
            { name: "Friomsorgen", status: "none" }
          ]
        }
      ]
    },
    {
      name: "Helse- og omsorgsdepartementet (HOD)", status: "none",
      children: [
        {
          name: "Helsedirektoratet", status: "none",
          children: [
            {
              name: "Helse Sør-Øst RHF", status: "none",
              children: [
                { name: "Oslo universitetssykehus", status: "none" },
                { name: "Akershus universitetssykehus", status: "none" },
                { name: "Sykehuset Østfold m.fl.", status: "none" }
              ]
            },
            {
              name: "Helse Vest RHF", status: "none",
              children: [
                { name: "Haukeland universitetssjukehus", status: "none" },
                { name: "Stavanger universitetssjukehus m.fl.", status: "none" }
              ]
            },
            {
              name: "Helse Midt-Norge RHF", status: "none",
              children: [
                { name: "St. Olavs hospital m.fl.", status: "none" }
              ]
            },
            {
              name: "Helse Nord RHF", status: "none",
              children: [
                { name: "Universitetssykehuset Nord-Norge (UNN) m.fl.", status: "none" }
              ]
            },
            {
              name: "AMK-sentraler (16 sentraler – nødnummer 113)", status: "none",
              children: [
                { name: "AMK Oslo (Oslo universitetssykehus)", status: "none" },
                { name: "AMK Vestre Viken (Drammen)", status: "none" },
                { name: "AMK Innlandet (Hamar/Gjøvik)", status: "none" },
                { name: "AMK Vestfold og Telemark (Tønsberg)", status: "none" },
                { name: "AMK Sørlandet (Kristiansand)", status: "none" },
                { name: "AMK Stavanger (Stavanger universitetssjukehus)", status: "none" },
                { name: "AMK Haugesund (Haugesund sjukehus)", status: "none" },
                { name: "AMK Bergen (Haukeland universitetssjukehus)", status: "none" },
                { name: "AMK Førde (Førde sentralsjukehus)", status: "none" },
                { name: "AMK Møre og Romsdal (Ålesund)", status: "none" },
                { name: "AMK Sør-Trøndelag (St. Olavs hospital)", status: "none" },
                { name: "AMK Nord-Trøndelag (Namsos/Levanger)", status: "none" },
                { name: "AMK Helgeland (Mo i Rana/Sandnessjøen)", status: "none" },
                { name: "AMK Bodø (Nordlandssykehuset)", status: "none" },
                { name: "AMK Tromsø (UNN Tromsø)", status: "none" },
                { name: "AMK Finnmark (Hammerfest/Kirkenes)", status: "none" }
              ]
            },
            { name: "Kommunale helsetjenester og legevakt", status: "none" }
          ]
        },
        {
          name: "Folkehelseinstituttet (FHI)", status: "none",
          children: [
            { name: "Smittevern og epidemiologi", status: "none" },
            { name: "Beredskapslagre", status: "none" }
          ]
        },
        {
          name: "Norsk Helsenett", status: "none",
          children: [
            { name: "Helsenettet, e-helse-infrastruktur", status: "none" }
          ]
        }
      ]
    },
    {
      name: "Finansdepartementet (FIN)", status: "none",
      children: [
        {
          name: "Tolletaten", status: "none",
          children: [
            {
              name: "Grensedivisjonen", status: "none",
              children: [
                { name: "Grensekontrollsteder (Svinesund, Ørje, Magnor, Gardermoen m.fl.)", status: "none" },
                { name: "Tollsteder langs grensen, havner og flyplasser", status: "none" },
                { name: "Hundetjenesten", status: "none" }
              ]
            },
            { name: "Etterretningsdivisjonen", status: "none", children: [{ name: "Analyse og etterretning mot smugling/org. kriminalitet", status: "none" }] },
            { name: "Vareførselsdivisjonen", status: "none", children: [{ name: "Klassifisering, dokumentkontroll, etterkontroll", status: "none" }] },
            { name: "IT-divisjonen", status: "none", children: [{ name: "Digitalisering og systemdrift", status: "none" }] },
            { name: "Administrasjonsdivisjonen", status: "none", children: [{ name: "HR, økonomi og støttefunksjoner", status: "none" }] }
          ]
        },
        { name: "Finanstilsynet", status: "none", children: [{ name: "Tilsyn bank, forsikring, verdipapir", status: "none" }] },
        {
          name: "Norges Bank", status: "none",
          children: [
            { name: "Betalingssystemer (NBO/NICS)", status: "none" },
            { name: "Valutareserver og beredskapslagre", status: "none" },
            { name: "Seddeltrykkeriet", status: "none" }
          ]
        },
        {
          name: "Skatteetaten", status: "none",
          children: [
            { name: "Folkeregisteret (kritisk samfunnsdata)", status: "none" },
            { name: "Regionskontorer (5 regioner)", status: "none" }
          ]
        }
      ]
    },
    {
      name: "Samferdselsdepartementet (SD)", status: "none",
      children: [
        {
          name: "Statens vegvesen", status: "none",
          children: [
            { name: "Vegdirektoratet (Oslo)", status: "none", children: [{ name: "Strategisk styring og ledelse", status: "none" },{ name: "Kommunikasjon", status: "none" },{ name: "Økonomi og virksomhetsstyring", status: "none" }] },
            { name: "Divisjon drift og vedlikehold (Tromsø)", status: "none", children: [{ name: "Avdeling Nord (Bodø)", status: "none" },{ name: "Avdeling Midt (Molde)", status: "none" },{ name: "Avdeling Vest (Leikanger)", status: "none" },{ name: "Avdeling Sør (Arendal)", status: "none" },{ name: "Avdeling Øst (Lillehammer)", status: "none" },{ name: "Riksvegferjedrift", status: "none" },{ name: "Tunnelsikkerhet og elektro", status: "none" }] },
            { name: "Divisjon utbygging (Bergen)", status: "none", children: [{ name: "Prosjektavdelinger (store veiprosjekter)", status: "none" },{ name: "Byggherrestøtte og kontraktsoppfølging", status: "none" },{ name: "Plan og prosjektering", status: "none" }] },
            { name: "Divisjon transport og samfunn (Trondheim)", status: "none", children: [{ name: "Nasjonal transportplanlegging (NTP)", status: "none" },{ name: "Trafikksikkerhet og analyse", status: "none" },{ name: "Data og statistikk", status: "none" },{ name: "Miljø og teknologi", status: "none" }] },
            { name: "Divisjon trafikant og kjøretøy (Arendal)", status: "none", children: [{ name: "Trafikkstasjoner (ca. 70 stasjoner landsdekkende)", status: "none" },{ name: "Førerkortmyndigheten", status: "none" },{ name: "Kjøretøytilsyn og kontroll", status: "none" },{ name: "Trafikantopplæring", status: "none" }] },
            { name: "Divisjon IT (Drammen)", status: "none", children: [{ name: "Systemutvikling og digitalisering", status: "none" },{ name: "IKT-drift og infrastruktur", status: "none" },{ name: "IKT-sikkerhet", status: "none" }] },
            { name: "Divisjon fellesfunksjoner og HR (Moss)", status: "none", children: [{ name: "HR og organisasjonsutvikling", status: "none" },{ name: "Anskaffelser", status: "none" },{ name: "Juridisk avdeling", status: "none" }] },
            { name: "Vegtrafikksentraler (5 regionale)", status: "none", children: [{ name: "VTS Nord (Mosjøen)", status: "none" },{ name: "VTS Midt (Trondheim)", status: "none" },{ name: "VTS Vest (Bergen)", status: "none" },{ name: "VTS Sør (Porsgrunn)", status: "none" },{ name: "VTS Øst (Lillestrøm)", status: "none" }] }
          ]
        },
        { name: "Jernbanedirektoratet / Bane NOR", status: "none", children: [{ name: "Togledingssentraler", status: "none" },{ name: "Infrastrukturberedskap jernbane", status: "none" }] },
        { name: "Avinor", status: "none", children: [{ name: "43 flyplasser (Gardermoen, Flesland, Tromsø m.fl.)", status: "none" },{ name: "Flysikringstjenester", status: "none" }] },
        { name: "Kystverket", status: "none", children: [{ name: "Sjøtrafikksentraler (VTS)", status: "none" },{ name: "Oljevernberedskap (NOFO-samarbeid)", status: "none" },{ name: "Fyrvesen og navigasjonsinfrastruktur", status: "none" }] },
        { name: "Nasjonal kommunikasjonsmyndighet (Nkom)", status: "none", children: [{ name: "Frekvensforvaltning", status: "none" },{ name: "Telekomsikkerhet og beredskap", status: "none" }] }
      ]
    },
    {
      name: "Olje- og energidepartementet (OED)", status: "none",
      children: [
        { name: "Norges vassdrags- og energidirektorat (NVE)", status: "none", children: [{ name: "Kraftforsyningens beredskapsorganisasjon (KBO)", status: "none", children: [{ name: "Regionale kraftforsyningsberedskapssjefer", status: "none" }] },{ name: "Flom- og skredvarsling", status: "none" },{ name: "Damtilsyn", status: "none" }] },
        { name: "Statnett", status: "none", children: [{ name: "Sentralnettet (landsdekkende strømnett)", status: "none" },{ name: "Driftssentraler", status: "none" }] },
        { name: "Petroleumstilsynet (Ptil)", status: "none", children: [{ name: "Tilsyn og beredskap på norsk sokkel", status: "none" }] }
      ]
    },
    {
      name: "Nærings- og fiskeridepartementet (NFD)", status: "none",
      children: [
        { name: "Mattilsynet", status: "none", children: [{ name: "Regionale avdelinger (5 regioner)", status: "none" },{ name: "Grensekontrollstasjoner", status: "none" },{ name: "Matforsyningssikkerhet og dyrehelseberedskap", status: "none" }] },
        { name: "Norsk Romsenter", status: "none", children: [{ name: "Satellittkommunikasjon og jordobservasjon", status: "none" },{ name: "Svalbard Satellite Station (SvalSat)", status: "none" }] },
        { name: "Sjøfartsdirektoratet", status: "none", children: [{ name: "Fartøystilsyn og sjøsikkerhet", status: "none" }] }
      ]
    },
    {
      name: "Kommunal- og distriktsdepartementet (KDD)", status: "none",
      children: [
        {
          name: "Statsforvalterne (10 embeter)", status: "none",
          children: [
            { name: "Østfold, Buskerud, Oslo og Akershus", status: "none" },
            { name: "Innlandet", status: "none" },
            { name: "Vestfold og Telemark", status: "none" },
            { name: "Agder", status: "none" },
            { name: "Rogaland", status: "none" },
            { name: "Vestland", status: "none" },
            { name: "Møre og Romsdal", status: "none" },
            { name: "Trøndelag", status: "none" },
            { name: "Nordland", status: "none" },
            { name: "Troms og Finnmark", status: "none" }
          ]
        },
        {
          name: "Kommunene (356 kommuner)", status: "none",
          children: [
            { name: "Kommunale kriseteam og beredskapsråd", status: "none" },
            {
              name: "Brann- og redningstjenestene (ca. 280 brannvesen)", status: "none",
              children: [
                {
                  name: "110-sentraler (12 regionale brannalarmsentraler)", status: "none",
                  children: [
                    { name: "110 Oslo (Oslo brann- og redningsetat)", status: "none" },
                    { name: "Øst 110-sentral IKS (Ski)", status: "none" },
                    { name: "Alarmsentral Brann Innlandet (Hamar)", status: "none" },
                    { name: "Sør-Øst 110 IKS (Tønsberg)", status: "none" },
                    { name: "110 Agder IKS (Kristiansand)", status: "none" },
                    { name: "110 Sør-Vest (Sandnes)", status: "none" },
                    { name: "110 Vest (Bergen)", status: "none" },
                    { name: "Møre og Romsdal 110-sentral KF (Ålesund)", status: "none" },
                    { name: "Midt-Norge 110-sentral IKS (Trondheim)", status: "none" },
                    { name: "110 Nordland (Bodø / Salten Brann IKS)", status: "none" },
                    { name: "Tromsø 110-sentral (Tromsø)", status: "none" },
                    { name: "110 Finnmark (Kirkenes)", status: "none" }
                  ]
                }
              ]
            },
            { name: "Kommunale vannverk og VA-beredskap", status: "none" }
          ]
        },
        {
          name: "Kartverket (Hønefoss)", status: "none",
          children: [
            {
              name: "Geodesidivisjonen", status: "none",
              children: [
                { name: "Geodetiske tjenester og referanserammer", status: "none" },
                { name: "GNSS- og posisjonstjenester (CPOS/DPOS)", status: "none" },
                { name: "Geodetisk observatorium (Ny-Ålesund, Svalbard)", status: "none" }
              ]
            },
            {
              name: "Landdivisjonen", status: "none",
              children: [
                { name: "Topografisk kartproduksjon", status: "none" },
                { name: "Ortofoto og bildedata", status: "none" },
                { name: "Terrengmodeller og høydedata (LiDAR)", status: "none" },
                { name: "Kartdata og referansedata", status: "none" }
              ]
            },
            {
              name: "Sjødivisjonen (Stavanger)", status: "none",
              children: [
                { name: "Sjøkartproduksjon (ENC og papirkart)", status: "none" },
                { name: "Hydrografi og dybdemåling", status: "none" },
                { name: "Navigasjonstjenester og nautiske publikasjoner", status: "none" }
              ]
            },
            {
              name: "Eiendomsdivisjonen", status: "none",
              children: [
                { name: "Matrikkelen (nasjonalt eiendomsregister)", status: "none" },
                { name: "Grunnboka (tinglysing av eiendom)", status: "none" },
                { name: "Tinglysing av borettslagsandeler", status: "none" }
              ]
            },
            {
              name: "IT-avdeling", status: "none",
              children: [
                { name: "Systemutvikling og digitalisering", status: "none" },
                { name: "IKT-drift og infrastruktur", status: "none" }
              ]
            },
            { name: "Virksomhetsstyring og administrasjon", status: "none" },
            { name: "Region- og samfunnskontakt", status: "none" },
            { name: "Kundesenter (Ullensvang)", status: "none" }
          ]
        }
      ]
    },
    {
      name: "Utenriksdepartementet (UD)", status: "none",
      children: [
        { name: "Utenrikstjenesten", status: "none", children: [{ name: "Ambassader og konsulater (ca. 100 stasjoner)", status: "none" },{ name: "Krisehåndtering norske borgere i utlandet", status: "none" }] },
        { name: "Norad", status: "none", children: [{ name: "Humanitær bistand og kriseberedskap internasjonalt", status: "none" }] },
        { name: "NATO-delegasjonen (Brussel)", status: "none", children: [{ name: "Sivil beredskapskoordinering med NATO", status: "none" }] }
      ]
    },
    {
      name: "Barne- og familiedepartementet (BFD)", status: "none",
      children: [
        { name: "Beredskap for sårbare grupper", status: "none", children: [{ name: "Barnevernet", status: "none" },{ name: "Krisesenter", status: "none" }] },
        {
          name: "FORF – Frivillige Organisasjoners Redningsfaglige Forum", status: "none",
          children: [
            { name: "Røde Kors Hjelpekorps", status: "none", children: [{ name: "Ca. 350 lokale hjelpekorps – søk, redning, førstehjelp", status: "none" }] },
            { name: "Norsk Folkehjelp Sanitet", status: "none", children: [{ name: "Ca. 120 lokallag – sanitet, søk og redning", status: "none" }] },
            { name: "Redningsselskapet (RS)", status: "none", children: [{ name: "Ca. 50 redningsskøyter – sjøredning langs kysten", status: "none" }] },
            { name: "Norske Redningshunder (NRH)", status: "none", children: [{ name: "Søkshunder – savnede i skog, fjell, skred og ruiner", status: "none" }] },
            { name: "Norsk Radio Relæ Liga (NRRL)", status: "none", children: [{ name: "Nødsamband via radioamatører", status: "none" }] },
            { name: "Speidernes Beredskapsgrupper (SBG)", status: "none", children: [{ name: "Beredskaps- og leirressurser", status: "none" }] },
            { name: "Norsk Grotteforbund (NGF)", status: "none", children: [{ name: "Grotteredning og spesialisert søk under bakken", status: "none" }] },
            { name: "NLFs Flytjeneste", status: "none", children: [{ name: "Søk fra luften med småfly", status: "none" }] },
            { name: "Norske Alpine Redningsgrupper (NARG)", status: "none", children: [{ name: "Fjellredning og alpine spesialoperasjoner", status: "none" }] }
          ]
        },
        { name: "Norske Kvinners Sanitetsforening", status: "none", children: [{ name: "Førstehjelpsgrupper og helsefremmende beredskap", status: "none" }] }
      ]
    }
  ]
};