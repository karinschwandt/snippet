var sets = [
    {
        name: 'Conversion to product',
        valorisations: [
            {
                id: 0,
                name: 'Landfill/composting',
                application: 'Application in land management',
                description: '<p>A number of land management options is available as an outlet for PBI sludges. The following options can make use of favourable sludge characteristics:</p><ul><li>Land spreading</li><li>Land remediation</li><li> Landfill cover</li><li> Composting</li><p>The sludge is directly applied in the area selected.</p></ul>',
                economic: 'Land management options, where legally allowed, do not appear to have a very attractive economic potential (gate fees, relatively low demand).',
                trlDescription: 'Land spreading and use of sludge in landfill covers have been applied in practice for many years already but the regulatory framework has in many cases been shifting.',
                link: '',
                sidestreams: [0,1,3],
                tlr: 6,
                value: 8,
                image: 'testimage-1.svg'
            }, {
                id: 1,
                name: 'Absorbent materials',
                application: 'Absorbent materials production',
                description: 'There are two main options with regard to the production of absorbent materials out of PBI sidestreams, namely animal bedding and absorbents for oil and other hydrophobic and hydrophilic liquids from water- or hard surfaces.',
                economic: 'Sludge disposal costs can be avoided through simple processes that require relatively low investments.',
                trlDescription: 'Both types of absorbent products mentioned here are already available on the market.',
                link: '',
                sidestreams: [2,4],
                tlr: 10,
                value: 1.5,
                image: 'testimage-1.svg'
            }, {
                id: 2,
                name: 'Building materials',
                application: 'Building materials production',
                description: 'PBI sidestreams can be used for the production of materials with applications within the construction sector. Specific materials that have been explored, or where PBI sidestreams are already applied, include cement, concrete, bricks, as well as various types of panels.',
                economic: 'The economic potential for the PBI appears to be limited, since the sidestream owner still needs to pay gate fees to building materials producers.',
                trlDescription: 'Some options, such as the production of cement and bricks, have been commercially applied for a long time already.',
                link: '',
                sidestreams: [1,2,5],
                tlr: 10,
                value: 2.5,
                image: 'testimage-1.svg'
            }, {
                id: 3,
                name: 'Wood-plastic composites ',
                application: 'Wood-plastic composites production',
                description: 'PBI sidestreams can be used in the production of wood-plastic composites (WPCs), which are normally made of wood fibres and thermoplastics. The sidestream can either constitute a cheap filler or it can actually improve the composite’s properties.',
                economic: 'WPCs are a market that has been demonstrating strong growth lately, with applications in the building sector, furniture, the automotive industry etc.',
                trlDescription: 'WPCs production is already commercial and utilises long-established processes; the incorporation of PBI sidestreams will not require the development of new technologies.',
                link: '',
                sidestreams: [1],
                tlr: 8,
                value: 5,
                image: 'testimage-1.svg'
            }, {
                id: 4,
                name: 'Fractionation',
                application: 'Fractionation',
                description: 'Separating one or more fractions out of a specific sidestream based on the characteristics of each fraction’s components could provide streams that are reusable for papermaking, as well as stream that are more attractive for external applications than the original material.',
                economic: 'Fractionation could assist in moving from gate fees for the disposal of sidestreams to optimal fraction utilisation within and outside the sector, while reducing the operating costs of the mill or even creating new sources of income.',
                trlDescription: 'Known fractionation concepts make use of equipment whose use is already widespread within the PBI (e.g. wire washers, hydrocyclones, flotation cells etc.).',
                link: '',
                sidestreams: [1],
                tlr: 8,
                value: 7.5,
                image: 'testimage-1.svg'
            }, {
                id: 5,
                name: 'Hydrolysis',
                application: 'Hydrolysis to fermentation feedstock',
                description: 'Cellulose-containing PBI sidestreams have been receiving attention as a potential feedstock for enzymatic hydrolysis in order to produce fermentation sugars to be subsequently converted into green chemicals or energy.',
                economic: 'Many fermentation products have already well established markets or are expected to become increasingly important in the future.',
                trlDescription: 'Known research around the production of fermentation feedstock out of PBI sidestreams is still found in the laboratory scale.',
                link: '',
                sidestreams: [1],
                tlr: 4,
                value: 7,
                image: 'testimage-1.svg'
            }, {
                id: 6,
                name: 'Nanocellulose',
                application: 'Nanocellulose production',
                description: 'Work is being done on the production of nanocrystalline cellulose (NCC) with PBI sidestreams serving as the feedstock for an acid hydrolysis process. NCC could also have a future as an additive in paper production/converting for improving certain product properties.',
                economic: 'This route offers the possibility to valorise current sidestreams by converting them into a high-value product with a multitude of potential applications within various sectors.',
                trlDescription: 'The first pilot plant for the production of NCC from bleached pulp will become operational within 2016.',
                link: '',
                sidestreams: [1],
                tlr: 5,
                value: 7,
                image: 'testimage-1.svg'
            }, {
                id: 7,
                name: 'PHAs',
                application: 'Polyhydroxyalkanoates production',
                description: 'The organic content of PBI process water could be utilised as food for polyhydroxyalkanoates (PHAs)-accumulating microorganisms. PHAs are a family of polyesters that serve as carbon- and energy storage units within certain microorganisms and which also have considerable potential as a bioplastic material.',
                economic: 'Various business models are possible when the production of PHAs out of PBI process water is considered. For the time being, however, a PHAs market still needs to be developed.',
                trlDescription: 'Pilot-scale installations for PHAs production out of wastewater have been operational within various sectors, including municipal wastewater treatment, the food industry and the paper industry.',
                link: '',
                sidestreams: [1],
                tlr: 6,
                value: 7,
                image: 'testimage-1.svg'
            }, {
                id: 8,
                name: 'Alginates',
                application: 'Alginates production',
                description: 'A new aerobic wastewater treatment technology can offer several improvements as a water treatment technology for municipal and industrial facilities, while also producing ALE (alginate-like exopolysaccharides) as a by-product that could have applications, among others, also within the PBI.',
                economic: 'Next to the production of a valuable new product in the form of ALE, the new water treatment technology can have multiple economic benefits by itself for the user that applies it.',
                trlDescription: 'The technology is already operational in several installations worldwide, primarily in municipal wastewater treatment facilities. The first ALE extraction installation is planned for 2017, while research on ALE applications is ongoing.',
                link: '',
                sidestreams: [1],
                tlr: 8,
                value: 8.5,
                image: 'testimage-1.svg'
            }
        ]
    }, {
        name: 'Conversion to energy',
        valorisations: [
            {
                id: 0,
                name: 'Incineration',
                application: 'Incineration',
                description: 'Incinerating PBI sidestreams for the generation of steam and electricity has become one of the most commonly applied sidestream disposal methods in Europe despite the fact that the high moisture and ash contents of PBI sludges are unfavourable for this process.',
                economic: 'Reducing paper mill reliance on other fuels and generating additional incomes by offering electricity to the grid are both possible.',
                trlDescription: 'Various types of incinerators have been commercially available already for many years.',
                link: '',
                sidestreams: [0, 5],
                tlr: 10,
                value: 6,
                image: 'testimage-1.svg'
            }, {
                id: 1,
                name: 'Gasification',
                application: 'Gasification',
                description: 'Gasification leads to the production of synthesis gas, composed of CO and H2, CO2, CH4, H2O and N2, which is a more versatile energy carrier than heat and can also serve as a feedstock for the production of chemicals.',
                economic: 'Reducing paper mill reliance on other fuels and generating additional incomes by offering electricity to the grid are both possible.',
                trlDescription: 'Gasification is a mature technology, primarily for coal, with biomass and waste streams expected to grow in significance.',
                link: '',
                sidestreams: [2, 3],
                tlr: 9,
                value: 6,
                image: 'testimage-1.svg'
            }, {
                id: 2,
                name: 'Pyrolysis',
                application: 'Pyrolysis',
                description: 'In the context of the paper industry pyrolysis can serve as both a conversion and a separation technique, since it can convert the organic content (fibres, plastics) of sidestreams into fuels (pyrolysis oil, pyrolysis gas) while returning the inorganic content (metals, minerals) in a clean form.',
                economic: 'Pyrolysis can reduce the dependence of the paper mill on fossil fuels or generate additional incomes by offering to third parties fuels, power or secondary products.',
                trlDescription: 'The pyrolysis of PBI mixed rejects has already been applied in practice, while that of PBI sludge is under pilot-scale development.',
                link: '',
                sidestreams: [4],
                tlr: 9,
                value: 7,
                image: 'testimage-1.svg'
            }, {
                id: 3,
                name: 'Anaerobic digestion',
                application: 'Anaerobic digestion',
                description: 'Anaerobic digestion refers to a series of processes during which microorganisms break down organic matter in the absence of oxygen. It can be applied as a wastewater treatment technology, but also for sludge treatment.',
                economic: 'Anaerobic digestion as a wastewater treatment method leads to the production of biogas, thus reducing paper mill reliance on other fuels or generating additional incomes by offering it to other parties.',
                trlDescription: 'Anaerobic digestion as a wastewater treatment method has been already widely applied within the PBI.',
                link: '',
                sidestreams: [1, 2, 5],
                tlr: 10,
                value: 8,
                image: 'testimage-1.svg'
            }, {
                id: 4,
                name: 'Secondary fuels',
                application: 'Secondary fuels production',
                description: 'Rejects from the stock preparation in paper mills utilising paper for recycling as their raw material can be converted into various forms of secondary fuels (e.g. fluff or pellets) to be co-fired at energy generation plants or by other industrial users.',
                economic: 'The paper mill may need to pay a gate fee to the user of the reject-derived fuel or, depending on the market situation, may receive a positive price for this product.',
                trlDescription: 'Secondary fuel production out of rejects has been already operational for several years.',
                link: '',
                sidestreams: [1, 2, 5],
                tlr: 10,
                value: 5,
                image: 'testimage-1.svg'
            }
        ]
    }
];