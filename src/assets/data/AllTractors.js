import DSeries from '../images/d_series.jpg';
import ESeries from '../images/e_series.jpg';
import MSeries from '../images/5m_series.jpg';
import SpecialtySeries from '../images/special_series.jpg';
import Speed from '../images/speed.png';
import Parts from '../images/parts.png';
import Implements from '../images/implements.png';
import Brochure from '../brochures/tractor.pdf';

const AllTractors = {
    // Series overview data for TractorsSection and navigation
    series: {
        'd-series': {
            id: 'd-series',
            name: 'D Series',
            fullName: 'D Series Tractor Models',
            image: DSeries,
            hpRange: '36 HP - 50 HP',
            description: 'Versatile, multipurpose machines designed for both agricultural and heavy-duty haulage tasks.',
            categoryDescription: 'Explore our range of 5D Series tractors, offering 36 HP to 50 HP power, built for efficiency in both field operations and transport. Choose from PowerPro and Value+++ models to suit your specific farming and haulage needs.',
            applications: ['Agriculture', 'Heavy-Duty Haulage', 'Multi-Utility Tasks'],
            categoryLink: '/tractor-category/d-series',
            models: [
                {
                    id: '5036D',
                    name: '5036D',
                    displayName: 'John Deere 5036D',
                    series: 'd-series',
                    seriesName: 'D Series',
                    hp: '36 HP',
                    hpDetailed: '36 HP (26.8 kW)',
                    rpm: '2100',
                    price: '₹4.8 - 7.2 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283007/5036D_mlsap5.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283007/5036D_mlsap5.png",],
                    brochureUrl: Brochure,
                    // Category page data
                    drive: '2WD',
                    engineHP: '36 HP (26.8 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard',
                    clutch: 'Single',
                    // Model page detailed data
                    description: 'Modern and technologically advanced, John Deere tractor 5036D offers unmatched efficiency at a competitive tractor price. This multipurpose agricultural tractor is best suitable for all farming and haulage applications.',
                    overview: 'The John Deere 5036D is a 36 HP tractor designed to handle different types of farm and transport work efficiently. It has a 3-cylinder, naturally aspirated engine that runs at 2100 RPM. Hydrostatic power steering, collar shift gearbox, and side shift levers make it reliable and comfortable for extended usage. It offers a lifting capacity of 1600 kgf, oil-immersed disc brakes, and a dry-type air filter with an air restriction sensor.',
                    specifications: {
                        'Engine': 'John Deere 3029D, 3 Cylinders, 36 HP (26.8 kW), 2100 RPM, Coolant cooled with overflow reservoir, Naturally aspirated',
                        'Air Filter': 'Dry Type, Dual element with air restriction indicator',
                        'Clutch': 'Single',
                        'Gear box': '8 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward 3.13 – 34.18 kmph, Reverse 4.10 – 14.87 kmph',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf lift capacity, Category-II, ADDC',
                        'Steering': 'Power (Hydrostatic)',
                        'PTO': 'Independent, 6 Splines, 540 @ 2100 ERPM',
                        'Tyres': 'Front: 6.0x16 (8 PR), Rear: 12.4x28 (12 PR) / 13.6x28 (12 PR optional)',
                        'Fuel Tank': '60 Litre',
                        'Electrical System': '88 Ah, 12 V Battery, 40 Amp Alternator, 12 V, 2.5 kW Starter motor',
                        'Dimensions': 'Weight: 1760 kg, Wheelbase: 1970 mm, Length: 3400 mm, Width: 1780 mm, Ground clearance: 390 mm, Turning radius with brakes: 2900 mm'
                    },
                    features: [
                        'Hydrostatic power steering for smooth handling and reduced effort',
                        'Side Shift Gear Levers for operator comfort and safety',
                        'Collar Shift Gear Box for quieter operation and low maintenance',
                        'High lifting capacity of 1600 kgf for multiple implement compatibility',
                        'Oil Immersed Disc Brakes for improved braking efficiency and durability',
                        'Dry Type Air Filter with restriction sensor for longer engine life'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Advanced lubrication system in gear box for longer component life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Engine cooling system enhances performance and reliability'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'Durable metal face seal design for extended axle life'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the price of John Deere 5036D?',
                            answer: 'John Deere 5036D is priced between ₹4.8 to ₹7.2 Lakhs depending on configuration and location. Contact your nearest dealer for exact pricing.'
                        },
                        {
                            question: 'What is the HP of John Deere 5036D?',
                            answer: 'John Deere 5036D delivers 36 HP (26.8 kW) at 2100 RPM.'
                        },
                        {
                            question: 'What are the features of John Deere 5036D?',
                            answer: 'Key features include power steering, side shift levers, collar shift gear box, 1600 kgf lifting capacity, oil-immersed disc brakes, and a dry-type air filter with sensor.'
                        },
                        {
                            question: 'Is John Deere 5036D a 2WD Tractor?',
                            answer: 'Yes, the 5036D comes in a 2WD configuration suitable for general-purpose and agricultural tasks.'
                        },
                        {
                            question: 'How can I contact a John Deere dealer near me?',
                            answer: 'Use the Dealer Locator tool on our website, call 1-800-123-4567, or email support@johndeere.com to connect with a local dealer.'
                        }
                    ]
                },
                {
                    id: '5105',
                    name: '5105',
                    displayName: 'John Deere 5105',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '40 HP',
                    hpDetailed: '40 HP (29.4 kW)',
                    rpm: '2100',
                    price: '₹6.0 - 8.5 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283016/5105_jpu6xt.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283016/5105_jpu6xt.png", ],
                    brochureUrl: Brochure,
                    // Category page data
                    drive: '2WD / 4WD',
                    engineHP: '40 HP (29.4 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard',
                    clutch: 'Single / Dual',
                    // Model page detailed data
                    description: 'John Deere tractor 5105 is offered in both 2WD and 4WD variants, suitable for dry and wet land cultivation. It is equipped with a powerful engine and features that support high productivity and efficiency in agricultural operations.',
                    overview: 'The John Deere 5105 is a powerful 40 HP tractor, suitable for both dry and wet farming. It is available in 2WD and 4WD options, allowing farmers to choose as per their needs. Its 3-cylinder, 2900 CC engine runs at 2100 RPM, generating high torque to manage heavy loads with ease. The dry-type dual-element air filter ensures 99.9% cleaning efficiency, keeping the engine safe from dust and increasing its life. The tractor has a collar shift gearbox with 8 forward and 4 reverse gears, offering a speed range of 2.83 to 31.07 km/h forward and 4.10 to 14.87 km/h reverse. The power steering system helps in easy manoeuvring, reducing fatigue during long working hours. With a lifting capacity of 1600 kg, it can handle multiple types of implements effectively. Oil-immersed disc brakes provide better stopping power and the 60-litre fuel tank allows longer operations without frequent refueling. The piston spray jet system maintains engine temperature and the selective control valve makes working with hydraulic implements easier. This combination of power, efficiency and advanced features makes the John Deere 5105 tractor a reliable choice for modern agricultural needs.',
                    specifications: {
                        'Engine': 'John Deere 3029D, 3 Cylinders, 40 HP (29.4 kW), 2100 RPM, Coolant cooled with overflow reservoir, Naturally aspirated',
                        'Air Filter': 'Dry Type, Dual element with air restriction indicator',
                        'Clutch': 'Single / Dual',
                        'Gear box': '8 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward 2.83 – 31.07 kmph (2WD) / 2.84 – 31.70 kmph (4WD), Reverse 4.10 – 14.87 kmph (2WD) / 3.74 – 13.52 kmph (4WD)',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf lift capacity, Category-II, ADDC',
                        'Steering': 'Power (Hydrostatic)',
                        'PTO': 'Independent, 6 Splines, 540 @ 2100 ERPM',
                        'Tyres': 'Front: 6.0x16 (8 PR, 2WD) / 8.0x18 (8 PR, 4WD), Rear: 13.6x28 (12 PR)',
                        'Fuel Tank': '60 Litre'
                    },
                    features: [
                        'Hydrostatic power steering for smooth handling and reduced effort',
                        'Collar Shift Gear Box for quieter operation and low maintenance',
                        'High lifting capacity of 1600 kgf for multiple implement compatibility',
                        'Oil Immersed Disc Brakes for improved braking efficiency and durability',
                        'Dry Type Air Filter with restriction sensor for longer engine life',
                        'Piston spray jet for optimized engine temperature and longer component life',
                        'Selective Control Valve for hydraulic implements',
                        'Mechanical Quick Raise and Lower (MQRL) for implement handling efficiency'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Advanced lubrication system in gear box for longer component life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Engine cooling system enhances performance and reliability'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'Durable metal face seal design for extended axle life'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the price of John Deere 5105?',
                            answer: 'John Deere 5105 is priced between ₹6.0 to ₹8.5 Lakhs depending on configuration and location. Contact your nearest dealer for exact pricing.'
                        },
                        {
                            question: 'What is the HP of John Deere 5105?',
                            answer: 'John Deere 5105 delivers 40 HP (29.4 kW) at 2100 RPM.'
                        },
                        {
                            question: 'What are the features of John Deere 5105?',
                            answer: 'Key features include power steering, collar shift gear box, 1600 kgf lifting capacity, oil-immersed disc brakes, dry-type air filter, piston spray jet, and mechanical quick raise and lower.'
                        },
                        {
                            question: 'Is John Deere 5105 a 2WD Tractor?',
                            answer: 'Yes, the 5105 comes in a 2WD configuration suitable for general-purpose and agricultural tasks.'
                        },
                        {
                            question: 'Is John Deere 5105 a 4WD Tractor?',
                            answer: 'Yes, the 5105 is also available in a 4WD configuration for better traction and performance in demanding conditions.'
                        }
                    ]
                },
                {
                    id: '5039d',
                    name: '5039D PowerPro',
                    displayName: 'John Deere 5039D PowerPro',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '41 HP',
                    hpDetailed: '41 HP (30.8 kW)',
                    rpm: '2100',
                    price: '₹6.0 - 7.5 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283010/5039D_large_rl67wk.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283010/5039D_large_rl67wk.png",],
                    brochureUrl: Brochure,
                    // Category page data
                    drive: '2WD',
                    engineHP: '41 HP (30.8 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard / Dual / Reverse',
                    clutch: 'Single / Dual',
                    // Model page detailed data
                    description: 'John Deere 5039D is the first PowerPro series tractor offering dual clutch and dual PTO, ideal for tasks like baling and crop management. It combines durability, comfort, and performance for modern farming needs.',
                    overview: 'The John Deere 5039D PowerPro is a 41 HP tractor operating at 2100 RPM, designed to meet the diverse needs of modern agriculture. Powered by the efficient John Deere 3029D engine, this 3-cylinder tractor ensures optimal performance across various farming applications. The dry-type dual-element air filter enhances engine longevity by providing superior filtration.\n\n\nThe tractor features a collar shift transmission with 8 forward and 4 reverse gears, offering speeds ranging from 3.25 to 35.51 km/h forward and 4.27 to 15.45 km/h in reverse. This versatility allows operators to select the appropriate speed for tasks such as ploughing, tilling or transporting goods. The side shift gear levers are ergonomically positioned to enhance operator comfort and facilitate ease of operation.\n\nEquipped with a high lifting capacity of 1600 kgf, the tractor efficiently handles a wide range of implements, ensuring productivity in various field conditions. The power steering system reduces operator fatigue during long working hours, contributing to increased efficiency. Additionally, the planetary gear with a straight axle design distributes rear axle loads over three points, reducing stress on individual gears and shafts, thereby enhancing durability and requiring minimal maintenance.\n\nThe oil-immersed disc brakes provide higher braking efficiency and extend the lifespan of the brake system. This tractor also offers dual-clutch and dual PTO, making it suitable for a variety of agricultural applications, including crop management tasks like baling.\n\nAlso, the 60-litre fuel tank ensures long working hours without frequent refuelling. This tractor is a solid choice for farmers who want both performance and versatility.',
                    specifications: {
                        'Engine': 'John Deere 3029D, 3 Cylinders, 41 HP (30.8 kW), 2100 RPM, Coolant cooled with overflow reservoir, Naturally aspirated',
                        'Air Filter': 'Dry Type, Dual element with air restriction indicator',
                        'Clutch': 'Single / Dual',
                        'Gear box': '8 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward 3.25 – 35.51 kmph, Reverse 4.27 – 15.45 kmph',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf lift capacity, Category-II, ADDC',
                        'Steering': 'Power (Hydrostatic)',
                        'PTO': 'Independent, 6 Splines, 540 @ 2100 ERPM / 540 @ 1600 ERPM (Optional)',
                        'Tyres': 'Front: 6.0x16 (8 PR), Rear: 12.4x28 / 13.6x28 (12 PR)',
                        'Fuel Tank': '60 Litre'
                    },
                    features: [
                        'Hydrostatic power steering for smooth handling and reduced effort',
                        'Collar Shift Gear Box with ergonomic side shift levers for better comfort',
                        'High lifting capacity of 1600 kgf for multiple implement compatibility',
                        'Oil Immersed Disc Brakes for improved braking efficiency and durability',
                        'Dry Type Air Filter with restriction indicator for longer engine life',
                        'Piston spray jet for optimized engine temperature and longer component life',
                        'Engine oil cooler to enhance engine life and reduce maintenance costs',
                        'Mechanical Quick Raise and Lower (MQRL) for implement handling efficiency',
                        'Inboard planetary final drives for higher load sustainability and durability'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Advanced lubrication system in gear box for longer component life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Engine cooling system enhances performance and reliability'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'Durable metal face seal design for extended axle life'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the price of John Deere 5039D?',
                            answer: 'John Deere 5039D PowerPro is priced between ₹6.0 to ₹7.5 Lakhs depending on configuration and location. Contact your nearest dealer for exact pricing.'
                        },
                        {
                            question: 'What is the HP of John Deere 5039D?',
                            answer: 'John Deere 5039D delivers 41 HP (30.8 kW) at 2100 RPM.'
                        },
                        {
                            question: 'What are the features of John Deere 5039D?',
                            answer: 'Key features include power steering, collar shift gear box, 1600 kgf lifting capacity, oil-immersed disc brakes, dry-type air filter, piston spray jet, engine oil cooler, and mechanical quick raise and lower.'
                        },
                        {
                            question: 'Is John Deere 5039D a 2WD Tractor?',
                            answer: 'Yes, the 5039D PowerPro comes in a 2WD configuration suitable for general-purpose and agricultural tasks.'
                        },
                        {
                            question: 'What is John Deere PowerPro?',
                            answer: 'PowerPro is a John Deere tractor series with enhanced features like higher torque backup, dual PTO, and dual clutch, boosting productivity for various agricultural operations.'
                        }
                    ]
                },
                {
                    id: '5042d',
                    name: '5042D PowerPro',
                    displayName: 'John Deere 5042D PowerPro',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '44 HP',
                    hpDetailed: '44 HP (32.3 kW)',
                    rpm: '2100',
                    price: '₹6.2 - 7.7 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283012/5042D_xej2ag.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283012/5042D_xej2ag.png",],
                    brochureUrl: Brochure,
                    // Category page data
                    drive: '2WD',
                    engineHP: '44 HP (32.3 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard / Dual / Reverse',
                    clutch: 'Single / Dual',
                    // Model page detailed data
                    description: 'John Deere 5042D PowerPro is a powerful 44 HP tractor with customizable features, high lifting capacity, and dual PTO options, suitable for various agricultural applications requiring durability and efficiency.',
                    overview: 'The John Deere 5042D PowerPro™ is a 44 HP tractor built to meet the diverse demands of modern agriculture. Powered by the John Deere 3029D engine, this 3-cylinder, naturally aspirated engine operates at 2100 RPM, delivering high torque for efficient performance across various farming applications. The dry-type dual-element air filter ensures superior engine protection, enhancing durability and reducing maintenance needs.\n\nEquipped with a collar shift transmission offering 8 forward and 4 reverse gears, the 5042D provides a wide range of speeds from 2.83 to 30.92 km/h, allowing operators to select the optimal speed for tasks such as ploughing, tilling or transporting goods. The side shift gear levers are ergonomically positioned to enhance operator comfort and facilitate ease of operation.\n\nThe tractor\'s high lifting capacity of 1600 kgf enables it to handle a wide range of implements, ensuring productivity in various field conditions. The power steering system reduces operator fatigue during long working hours, contributing to increased efficiency. Also, the oil-immersed disc provides high braking efficiency and extends the brake system’s life.\n\nWith a 60-litre fuel tank, this tractor is well-suited for extended operations without frequent refuelling. The John Deere 5042D PowerPro™ tractor is a dependable option for farmers looking for a combination of power and convenience.',
                    specifications: {
                        'Engine': 'John Deere 3029D, 3 Cylinders, 44 HP (32.3 kW), 2100 RPM, Coolant cooled with overflow reservoir, Naturally aspirated',
                        'Air Filter': 'Dry Type, Dual element',
                        'Clutch': 'Single / Dual',
                        'Gear box': '8 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward 2.83 – 30.92 kmph',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf lift capacity, Category-II, ADDC',
                        'Steering': 'Power',
                        'PTO': 'Independent, 6 Splines, 540 @ 2100 ERPM / 540 @ 1600 ERPM (Optional)',
                        'Tyres': 'Front: 6.0x16 (8 PR), Rear: 13.6x28 (12 PR)',
                        'Fuel Tank': '60 Litre'
                    },
                    features: [
                        'High engine back up torque for tough field conditions',
                        'Mechanical Quick Raise and Lower (MQRL) for ease of implement lifting',
                        'Powerful PTO for a wide range of applications',
                        'Hydrostatic power steering for enhanced comfort and reduced operator fatigue',
                        'High lifting capacity of 1600 kgf to handle multiple implements',
                        'Oil Immersed Disc Brakes for effective braking and longer system life',
                        'Dry Type Air Filter for better engine protection and durability'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Advanced lubrication system in gear box for longer component life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Engine cooling system enhances performance and reliability'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'Durable metal face seal design for extended axle life'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the price of John Deere 5042D?',
                            answer: 'John Deere 5042D PowerPro is priced between ₹6.2 to ₹7.7 Lakhs depending on configuration and location. Contact your nearest dealer for exact pricing.'
                        },
                        {
                            question: 'What is the HP of John Deere 5042D?',
                            answer: 'John Deere 5042D delivers 44 HP (32.3 kW) at 2100 RPM.'
                        },
                        {
                            question: 'What are the features of John Deere 5042D?',
                            answer: 'Key features include high torque backup, power steering, oil-immersed disc brakes, high lifting capacity, and dry-type air filter.'
                        },
                        {
                            question: 'Is John Deere 5042D a 2WD Tractor?',
                            answer: 'Yes, the 5042D PowerPro comes in a 2WD configuration suitable for general-purpose and agricultural tasks.'
                        }
                    ]
                },
                {
                    id: '5045d',
                    name: '5045D PowerPro',
                    displayName: 'John Deere 5045D PowerPro',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '46 HP',
                    hpDetailed: '46 HP (34.1 kW)',
                    rpm: '2100',
                    price: '₹6.4 - 8.2 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283017/5045D_powerPro_qddjgx.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283017/5045D_powerPro_qddjgx.png", ],
                    brochureUrl: Brochure,
                    variants: ['2WD', '4WD', 'Puddling Special 4WD'],
                    drive: '2WD / 4WD / Puddling Special 4WD',
                    engineHP: '46 HP (34.1 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard / Economy / Reverse',
                    clutch: 'Single / Dual',
                    description: 'John Deere 5045D PowerPro™ is a powerful 46 HP tractor with 2WD, 4WD and Puddling Special variants designed to handle diverse agricultural needs from dry fields to wetland puddling. Equipped with dual PTO, robust hydraulics, and comfort features, it is built for both performance and operator ease.',
                    overview: 'The John Deere 5045D PowerPro™ is designed for versatile farming operations with high torque 3-cylinder engine producing 46 HP at 2100 RPM. It features a dry-type dual-element air filter, coolant-cooled engine, and ergonomic side shift levers for ease of use. The transmission supports 8 forward and 4 reverse speeds, perfect for a variety of field tasks.\n\nWith a lifting capacity of 1600 kgf and Category-II hydraulics, the 5045D handles implements efficiently. Dual PTO speeds including economy PTO make it fuel-efficient. The tractor comes in 2WD and 4WD options for different terrains, and the Puddling Special 4WD variant is tailored for rice fields with a heavier build and lower ground clearance.\n\nIt has power steering, oil-immersed brakes, 60-litre fuel tank, and JDLink™ connectivity for remote diagnostics. The 5045D is a reliable choice for farmers who want performance, economy, and long-lasting durability.',
                    specifications: {
                        'Engine': 'John Deere 3029D, 3 Cylinders, 46 HP (34.1 kW), 2100 RPM, Coolant cooled with overflow reservoir, Naturally aspirated',
                        'Air Filter': 'Dry Type, Dual element',
                        'Clutch': 'Single / Dual',
                        'Gear box': '8 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward: 2.83 – 30.92 kmph, Reverse: 3.71 – 13.43 kmph',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf lift capacity, Category-II, ADDC',
                        'Steering': 'Power steering',
                        'PTO': '540 @ 2100 ERPM, 540 Economy @ 1600 ERPM',
                        'Tyres': 'Front: 6.0x16 (2WD), 8.0x18 (4WD); Rear: 13.6x28, 14.9x28 (optional)',
                        'Fuel Tank': '60 Litre',
                        'Electricals': '88 Ah Battery, 12V, 40 Amp Alternator, 2.5 kW Starter Motor',
                        'Weight': '2WD: 1810 kg, Puddling: 2100 kg',
                        'Wheelbase': '2WD/4WD: 1970 mm, Puddling: 1950 mm',
                        'Dimensions': 'LxW - 2WD: 3410x1810 mm, Puddling: 3370x1810 mm',
                        'Ground Clearance': '2WD/4WD: 415 mm, Puddling: 360 mm',
                        'Turning Radius': '2900 mm (with brakes)'
                    },
                    features: [
                        'JDLink™ enabled for remote monitoring and alerts',
                        'High torque backup for challenging field conditions',
                        'Mechanical Quick Raise and Lower (MQRL) for implement efficiency',
                        'Hydrostatic power steering for comfort during long usage',
                        'PTO with Economy Mode for fuel savings',
                        'Puddling Special variant for wetland and rice applications',
                        'Oil Immersed Brakes for extended durability'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Gearbox lubrication extends component life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Improves thermal efficiency and engine life'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'Metal face seal for longer rear axle performance'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the HP of John Deere 5045D?',
                            answer: 'The John Deere 5045D PowerPro delivers 46 HP (34.1 kW) at 2100 RPM.'
                        },
                        {
                            question: 'What are the variants available for the 5045D?',
                            answer: 'Available in 2WD, 4WD, and Puddling Special 4WD for different terrains.'
                        },
                        {
                            question: 'What is the price of John Deere 5045D?',
                            answer: 'Price ranges between ₹6.4 to ₹8.2 Lakhs based on variant and location.'
                        },
                        {
                            question: 'Is the 5045D suitable for wetland puddling?',
                            answer: 'Yes, the Puddling Special 4WD variant is designed for wetland and rice field use.'
                        }
                    ]
                },
                {
                    id: '5045dg',
                    name: '5045D GearPro',
                    displayName: 'John Deere 5045D GearPro™',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '46 HP',
                    hpDetailed: '46 HP (34.1 kW)',
                    rpm: '2100',
                    price: '₹6.4 - 8.2 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283010/5045d_gearproavif_oqzomy.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283010/5045d_gearproavif_oqzomy.png",],
                    brochureUrl: Brochure,
                    variants: ['2WD', '4WD', 'Puddling Special 4WD'],
                    drive: '2WD / 4WD / Puddling Special 4WD',
                    engineHP: '46 HP (34.1 kW)',
                    transmission: '12+4, Collarshift',
                    ptoOption: 'Standard / Economy / Reverse',
                    clutch: 'Single / Dual',
                    description: 'John Deere 5045D GearPro™ is a powerful 46 HP tractor with advanced 12+4 Collarshift transmission and high torque output. Available in 2WD, 4WD, and Puddling Special variants, it supports various agricultural applications with ease and reliability.',
                    overview: 'The John Deere 5045D GearPro™ is a 46 HP tractor engineered for modern agriculture. It is powered by a 3-cylinder, 2900 CC engine operating at 2100 RPM with high backup torque for enhanced performance.\n\nEquipped with a collarshift 12F+4R gearbox, the GearPro provides speed flexibility (2.83 – 30.92 kmph) ideal for ploughing, tilling, and haulage. Ergonomically placed side shift levers and a stylish power steering wheel enhance operator comfort.\n\nWith a lifting capacity of 1600 kgf and Category-II hydraulics, it supports diverse implements. JDLink™ connectivity, oil-immersed brakes, and durable build make it a strong and efficient choice for Indian farmers.',
                    specifications: {
                        'Engine': 'John Deere 3029D, 3 Cylinders, 46 HP (34.1 kW), 2100 RPM, Coolant cooled with overflow reservoir, Naturally aspirated',
                        'Air Filter': 'Dry Type, Dual element',
                        'Clutch': 'Single / Dual',
                        'Gear box': '12 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward: 2.83 – 30.92 kmph, Reverse: 3.71 – 13.43 kmph',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf lift capacity, Category-II, ADDC',
                        'Steering': 'Power steering',
                        'PTO': '540 @ 2100 ERPM, 540 Economy @ 1600 ERPM, Reverse PTO',
                        'Tyres': 'Front: 6.0x16 (2WD), 8.0x18 (4WD); Rear: 13.6x28, 14.9x28 (optional)',
                        'Fuel Tank': '60 Litre',
                        'Electricals': '88 Ah Battery, 12V, 40 Amp Alternator, 2.5 kW Starter Motor',
                        'Weight': '2WD: 1810 kg, Puddling: 2100 kg',
                        'Wheelbase': '2WD/4WD: 1970 mm, Puddling: 1950 mm',
                        'Dimensions': 'LxW - 2WD: 3410x1810 mm, Puddling: 3370x1810 mm',
                        'Ground Clearance': '2WD/4WD: 415 mm, Puddling: 360 mm',
                        'Turning Radius': '2900 mm (with brakes)'
                    },
                    features: [
                        'High engine back up torque for better performance',
                        'Power steering with ergonomic design',
                        'Mechanical Quick Raise and Lower (MQRL)',
                        'High lifting capacity for a range of implements',
                        'Powerful and economical PTO options',
                        'Availability of JDLink™ for smart monitoring',
                        'Planetary Gear With Straight Axle and 4WD variant'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Gearbox lubrication extends component life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Improves thermal efficiency and engine life'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'Metal face seal for longer rear axle performance'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the HP of John Deere 5045D GearPro?',
                            answer: 'The John Deere 5045D GearPro™ delivers 46 HP (34.1 kW) at 2100 RPM.'
                        },
                        {
                            question: 'What are the variants available for the 5045D GearPro?',
                            answer: 'Available in 2WD, 4WD, and Puddling Special 4WD for different terrains.'
                        },
                        {
                            question: 'What is the price of John Deere 5045D GearPro?',
                            answer: 'Price ranges between ₹6.4 to ₹8.2 Lakhs based on variant and location.'
                        },
                        {
                            question: 'Is the 5045D GearPro suitable for wetland puddling?',
                            answer: 'Yes, the Puddling Special 4WD variant is designed specifically for wetland and rice field applications.'
                        }
                    ]
                },
                {
                    id: '5205',
                    name: '5205',
                    displayName: 'John Deere 5205',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '48 HP',
                    hpDetailed: '48 HP (35.1 kW)',
                    rpm: '2100',
                    price: '₹4.8 - ₹7.3 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283015/5205_hv8fdc.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283015/5205_hv8fdc.png", ],
                    brochureUrl: Brochure,
                    variants: ['2WD'],
                    drive: '2WD',
                    engineHP: '48 HP (35.1 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard / Economy / Reverse',
                    clutch: 'Single / Dual',
                    description: 'The John Deere 5205 is a powerful 48 HP, 2WD tractor ideal for challenging field applications like haulage and cultivation. Featuring high torque backup and 8+4 gear transmission, it ensures smooth and efficient operation for Indian farmers.',
                    overview: 'John Deere 5205 comes equipped with a naturally aspirated 3-cylinder engine delivering 48 HP at 2100 RPM. The tractor supports multiple applications with an 8F+4R Collarshift gearbox, dry-type air filters, and dual clutch options. Its robust build, ergonomic seat with side shift levers, and mechanical quick raise and lower (MQRL) functionality improve usability and productivity.\n\nWith a high lift capacity of 1600 kg and oil-immersed brakes, it handles heavy-duty implements easily. Other highlights include top shaft lubrication, piston spray jet cooling, and planetary final drives for longer life and durability.',
                    specifications: {
                        'Engine': '3-cylinder, 48 HP (35.1 kW), 2100 RPM, Naturally aspirated, Coolant cooled with overflow reservoir',
                        'Air Filter': 'Dry type, Dual element',
                        'Clutch': 'Single / Dual',
                        'Gear Box': '8 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward: 2.96 – 32.39 km/h, Reverse: 3.89 – 14.90 km/h',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf at lower link ends, Category II, ADDC',
                        'Steering': 'Power steering',
                        'PTO': '540 @ 2100 ERPM, 540 Economy @ 1600 ERPM, Reverse PTO',
                        'Tyres': 'Front: 7.5 x 16, 8PR; Rear: 14.9 x 28, 12PR',
                        'Fuel Tank': '60 Litre (assumed; confirm if known)',
                        'Electricals': '12V Battery, 40 Amp Alternator (assumed similar to 5045D)',
                        'Weight': '1870 kg',
                        'Wheelbase': '1950 mm',
                        'Dimensions': 'Length: 3355 mm, Width: 1778 mm',
                        'Ground Clearance': '375 mm',
                        'Turning Radius': '2900 mm (with brakes)'
                    },
                    features: [
                        'High engine back-up torque',
                        'Comfortable seating with side shift gear levers',
                        'Dry-type air filter with 99.9% cleaning efficiency',
                        'Oil-immersed disc brakes for durability',
                        'Economical and durable dual clutch',
                        'MQRL for time-saving hydraulics operation',
                        'Inboard planetary final drives for load handling',
                        'Powerful PTO and JDLink™ availability'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Top Shaft Lubrication',
                            description: 'Ensures smooth gearbox performance and longer life'
                        },
                        {
                            icon: Parts,
                            title: 'Piston Spray Cooling',
                            description: 'Improves engine cooling and durability'
                        },
                        {
                            icon: Implements,
                            title: 'Rear Oil Axle',
                            description: 'With metal face seal for longer performance and reduced maintenance'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the HP of John Deere 5205?',
                            answer: 'The John Deere 5205 delivers 48 HP at 2100 RPM.'
                        },
                        {
                            question: 'Is the John Deere 5205 available in 2WD?',
                            answer: 'Yes, the John Deere 5205 is available in a 2WD variant.'
                        },
                        {
                            question: 'What is the price of the John Deere 5205?',
                            answer: 'The price ranges from ₹4.8 lakhs to ₹7.3 lakhs. Contact your local dealer for the exact on-road price.'
                        },
                        {
                            question: 'What are the key features of John Deere 5205?',
                            answer: 'Features include high torque engine, 8+4 Collarshift transmission, MQRL, dual clutch, power steering, and heavy-duty hydraulics.'
                        }
                    ]
                },
                {
                    id: '5050d',
                    name: '5050D',
                    displayName: 'John Deere 5050D',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '50 HP',
                    hpDetailed: '50 HP (36.9 kW)',
                    rpm: '2100',
                    price: '₹4.8 - ₹7.8 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283009/5050d_gearproo_rl80wt.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283009/5050d_gearproo_rl80wt.png",],
                    brochureUrl: Brochure,
                    variants: ['2WD', '4WD'],
                    drive: '2WD & 4WD',
                    engineHP: '50 HP (36.9 kW)',
                    transmission: '8+4, Collarshift',
                    ptoOption: 'Standard / Economy / Reverse',
                    clutch: 'Single / Dual',
                    description: 'John Deere 5050D is a powerful and versatile 50 HP tractor available in both 2WD and 4WD variants. Engineered for heavy-duty applications, this tractor excels in tilling, sowing, puddling, and haulage tasks with remarkable performance and fuel efficiency.',
                    overview: 'The 5050D tractor is equipped with a 3-cylinder, naturally aspirated engine generating 50 HP at 2100 RPM. It features an 8+4 fully constant mesh gearbox for smooth shifting and low maintenance. Farmers benefit from power steering, high backup torque, and multiple PTO options including reverse PTO.\n\nIt supports over 30 applications like thresher, reaper, post-hole digger, and mulcher. Optional wider front tyres enhance traction in puddling, and mechanical front-wheel drive (MFWD) ensures better grip. Additional comfort is provided by the side shift gear levers, tiltable steering, and a spacious open-station platform.',
                    specifications: {
                        'Engine': '3-cylinder, 50 HP (36.9 kW), 2100 RPM, Naturally aspirated, Coolant cooled with overflow reservoir',
                        'Air Filter': 'Dry type, Dual element',
                        'Clutch': 'Single / Dual',
                        'Gear Box': '8 Forward + 4 Reverse, Collarshift, Fully Constant Mesh',
                        'Speeds': 'Forward: 2.96 – 32.39 km/h, Reverse: 3.89 – 14.90 km/h',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf at lower link ends, Category II, ADDC',
                        'Steering': 'Power steering',
                        'PTO': '540 @ 2100 ERPM, 540 Economy @ 1600 ERPM, Reverse PTO',
                        'Tyres': 'Front: 7.5 x 16 (Standard for 2WD), 8.0 x 18 / 9.5 x 20 / 8.3 x 24 (Optional for 4WD); Rear: 14.9 x 28 (Standard), 16.9 x 28 (Optional)',
                        'Fuel Tank': '60 Litres (assumed based on similar models)',
                        'Electricals': '12V Battery, 40 Amp Alternator (assumed)',
                        'Weight': '1870 kg',
                        'Wheelbase': '1950 mm',
                        'Dimensions': 'Length: 3355 mm, Width: 1778 mm',
                        'Ground Clearance': '375 mm',
                        'Turning Radius': '2900 mm (with brakes)'
                    },
                    features: [
                        'High torque backup for overload protection',
                        'Side Shift Gear Levers for enhanced operator comfort',
                        'Dry-type air filter with 99.9% efficiency',
                        '4WD with heavy-load drive (HLD) option',
                        'Oil-immersed disc brakes for longer life',
                        'Reverse PTO and Economy PTO options',
                        'Adjustable front axle width (4WD)',
                        'Wide front tires available for puddling and high traction',
                        'Mechanical front-wheel drive for traction in tough conditions',
                        'Electrical quick raise and lower (EQRL)',
                        'Planetary gear with straight axle for uniform load distribution'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: 'Constant Mesh Gearbox',
                            description: 'Smooth shifting and reduced wear for long-term use'
                        },
                        {
                            icon: Parts,
                            title: 'Backup Torque',
                            description: 'Avoids gear shifting during sudden load increase, reducing fatigue'
                        },
                        {
                            icon: Implements,
                            title: '4WD with Bigger Tires (Optional)',
                            description: 'Better traction and less slippage, ideal for wet land operations'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the HP of John Deere 5050D?',
                            answer: 'The John Deere 5050D delivers 50 HP at 2100 RPM.'
                        },
                        {
                            question: 'Is the John Deere 5050D available in 4WD?',
                            answer: 'Yes, the John Deere 5050D is available in both 2WD and 4WD variants.'
                        },
                        {
                            question: 'What is the price of the John Deere 5050D?',
                            answer: 'The price ranges from ₹4.8 lakhs to ₹7.8 lakhs. Contact your nearest dealer for exact on-road price.'
                        },
                        {
                            question: 'What implements are compatible with the John Deere 5050D?',
                            answer: 'It supports over 30 implements including rotavator, thresher, reaper, post-hole digger, mulcher, and more.'
                        }
                    ]
                },
                {
                    id: '5050d-gearpro',
                    name: '5050D GearPro™',
                    displayName: 'John Deere 5050D GearPro™',
                    series: '5d-series',
                    seriesName: '5D Series',
                    hp: '50 HP',
                    hpDetailed: '50 HP (36.9 kW)',
                    rpm: '2100',
                    price: '₹4.8 - ₹29 Lakhs',
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283008/5050D_kc9lnr.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749283008/5050D_kc9lnr.png",],
                    brochureUrl: Brochure,
                    variants: ['2WD', '4WD'],
                    drive: '2WD & 4WD',
                    engineHP: '50 HP (36.9 kW)',
                    transmission: '12+4, Collarshift',
                    ptoOption: 'Standard / Economy / Reverse',
                    clutch: 'Single / Dual',
                    description: 'John Deere 5050D GearPro™ is an advanced version of the 5050D series, offering superior gear options with 12 forward and 4 reverse gears. It’s built for heavy-duty performance with a smooth ride and greater comfort, ideal for modern agricultural needs in both 2WD and 4WD configurations.',
                    overview: 'The 5050D GearPro™ is a 50 HP, 3-cylinder, naturally aspirated tractor with a powerful backup torque system. It features a 12F+4R gearbox with A, B, C forward ranges and one reverse range (R), allowing optimized speed selection for diverse tasks. Premium styling and comfort features include a premium seat, rubber floor mats, a stylish steering wheel, and a 500-hour service interval.\n\nAdditional features such as 540 Economy PTO, Planetary Gear with Straight Axle, and high lifting capacity (up to 1800 kg) make it suitable for more than 30 farming applications. New 15.9 x 28 rear tire options improve traction and performance in challenging field conditions.',
                    specifications: {
                        'Engine': '3-cylinder, 50 HP (36.9 kW), 2100 RPM, Naturally aspirated, Coolant cooled with overflow reservoir',
                        'Air Filter': 'Dry type, Dual element',
                        'Clutch': 'Single / Dual',
                        'Gear Box': '12 Forward + 4 Reverse, Collarshift',
                        'Speeds': 'Forward: 3.02 – 32.9 km/h, Reverse: 3.96 – 14.31 km/h',
                        'Brakes': 'Oil immersed disc brakes',
                        'Hydraulics': '1600 kgf & 1800 kgf at lower link ends, Category II, ADDC',
                        'Steering': 'Power steering',
                        'PTO': '540 @ 2100 ERPM, 540 Economy @ 1600 ERPM, Reverse PTO',
                        'Tyres': 'Front: 6.0 x 16 or 7.5 x 16 (2WD), 8.3 x 24 or 9.5 x 20 (4WD); Rear: 14.9 x 28 (Standard), 15.9 x 28 / 16.9 x 28 (Optional)',
                        'Fuel Tank': '60 Litres (assumed)',
                        'Electricals': '12V Battery, 40 Amp Alternator (assumed)',
                        'Weight': '2000 kg',
                        'Wheelbase': '1945 mm',
                        'Dimensions': 'Length: 3405 mm, Width: 1841 mm',
                        'Ground Clearance': '370 mm',
                        'Turning Radius': '2900 mm (with brakes)'
                    },
                    features: [
                        '12F+4R gear configuration with A, B, C forward ranges and reverse range R',
                        'Stylish steering wheel and premium seat for added comfort',
                        'Rubber floor mat for vibration reduction',
                        '540 Economy PTO for fuel efficiency',
                        '500 hours service interval for lower maintenance',
                        'Planetary gear with straight axle for uniform load',
                        'High backup torque allows steady operation under varying load',
                        'Optional larger 15.9 x 28 rear tires for better traction',
                        'Mechanical quick raise and lower (MQRL)',
                        'High lifting capacity of up to 1800 kg'
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: '12F+4R Gearbox',
                            description: 'Multiple gear options for optimal speed selection during varied field conditions'
                        },
                        {
                            icon: Parts,
                            title: 'Backup Torque',
                            description: 'Provides stable performance without frequent gear shifting'
                        },
                        {
                            icon: Implements,
                            title: 'Operator Comfort',
                            description: 'Premium seat, rubber floor mats, and easy-access levers enhance ease of use'
                        }
                    ],
                    faqs: [
                        {
                            question: 'What is the HP of John Deere 5050D GearPro™?',
                            answer: 'The 5050D GearPro™ delivers 50 HP at 2100 RPM.'
                        },
                        {
                            question: 'Is the John Deere 5050D GearPro™ available in 4WD?',
                            answer: 'Yes, it is available in both 2WD and 4WD configurations.'
                        },
                        {
                            question: 'What is the price of the John Deere 5050D GearPro™?',
                            answer: 'It ranges between ₹4.8 lakhs to ₹29 lakhs. Contact your nearest John Deere dealer for on-road pricing.'
                        },
                        {
                            question: 'What makes the GearPro™ model different from the standard 5050D?',
                            answer: 'The GearPro™ model comes with a 12+4 gearbox, premium operator comfort features, and higher lifting capacity.'
                        }
                    ]
                }
            ]
        },
        'e-series': {
            id: 'e-series',
            name: 'E Series',
            fullName: 'E Series Tractor Models',
            image: ESeries,
            hpRange: '50 HP - 74 HP',
            description: 'High-performance tractors built for heavy-duty applications and handling large implements with ease.',
            categoryDescription: 'Discover the John Deere 5E Series tractors, ranging from 50 HP to 74 HP. Engineered for powerful performance in demanding operations, they are ideal for large-scale farming and heavy equipment handling.',
            applications: ['Heavy-Duty Farming', 'Large Implements', 'Commercial Agriculture'],
            categoryLink: '/tractor-category/e-series',
            models: [
                {
                    id: "5210d-gearpro",
                    name: "5210 GearPro™",
                    displayName: "John Deere 5210 GearPro™",
                    series: "5d-series",
                    seriesName: "5D Series",
                    hp: "50 HP",
                    hpDetailed: "50 HP (36.5 kW)",
                    rpm: "2100",
                    price: "₹6.9 - ₹9.3 Lakhs",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284437/5210_0_pmcuhe.png",
                    images: [
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284437/5210_0_pmcuhe.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284433/5210_1_dc6ort.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284414/5210_2_xpw1in.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284485/5210_3_oeg4gz.png"],
                    brochureUrl: Brochure,
                    variants: ["2WD", "4WD"],
                    drive: "2WD & 4WD",
                    engineHP: "50 HP (36.5 kW)",
                    transmission: "12F+4R, Collarshift / TSS",
                    clutch: "Dual / PermaClutch™",
                    ptoOption: "Standard / Economy / Reverse PTO",
                    description: "John Deere 5210 GearPro™ is a 50 HP turbocharged tractor designed for high performance, power, and comfort with advanced features like 12F+4R TSS gearbox, 4-range speeds, SCV, and up to 2500 kg lift capacity. Available in both 2WD and 4WD.",
                    overview: "The 5210 GearPro™ offers Xtra Range and Xtra Dum with a powerful 3029H turbocharged engine. Designed for superior fuel efficiency and comfort, it features a 12F+4R gearbox with TSS, suspended pedals, PermaClutch™ option, power steering, and dual PTO. The tractor is ideal for a wide range of agricultural and non-agricultural operations including sugarcane haulage, dozing, puddling, and post hole digging. High lifting capacity (up to 2500 kg), SCV, EQRL, and premium comfort make this tractor a top choice.",
                    specifications: {
                        "Engine": "3-cylinder, 50 HP (36.5 kW), 2100 RPM, Turbocharged, Direct Injection, Inline FIP, Coolant cooled with overflow reservoir",
                        "Air Filter": "Dry type, Dual element",
                        "Clutch": "Dual / Single PermaClutch™",
                        "Gear Box": "12 Forward + 4 Reverse, Collarshift / TSS (Top Shaft Synchronizer)",
                        "Speeds": "Forward: 1.9 – 31.5 km/h, Reverse: 3.4 – 22.1 km/h",
                        "Brakes": "Hydraulically actuated, Self-adjusting & Self-equalizing Oil Immersed Disc Brakes",
                        "Hydraulics": "2000 kgf / 2500 kgf lifting capacity (optional), Category II, ADDC",
                        "Steering": "Power Steering",
                        "PTO": "540 @ 2100 RPM (Standard), 540 @ 1600 RPM (Economy), Reverse PTO",
                        "Fuel Tank": "68 Litres",
                        "Electricals": "88 Ah, 12V Battery, 40 Amp Alternator, 2.5 kW Starter Motor",
                        "Tyres 2WD": "Front: 6.5x20 / 7.5x16 (8PR), Rear: 14.9x28 / 16.9x28 (12PR)",
                        "Tyres 4WD": "Front: 9.5x24 (8PR), Rear: 16.9x28 (12PR)",
                        "Weight 2WD": "2110 kg",
                        "Weight 4WD": "2410 kg",
                        "Wheelbase": "2050 mm",
                        "Overall Dimensions": "Length: 3535 mm (2WD), 3585 mm (4WD); Width: 1850 mm (2WD), 1875 mm (4WD)",
                        "Turning Radius": "3150 mm with brakes"
                    },
                    features: [
                        "Turbocharged engine with Inline FIP for fuel efficiency and high performance",
                        "12F+4R Gearbox with Top Shaft Synchronizer (TSS) for smoother shifting",
                        "Reverse and Economy PTO for operational flexibility",
                        "PermaClutch™ for high durability and low maintenance",
                        "High backup torque (38%) for demanding applications",
                        "Optional lift capacity of up to 2500 kg for heavy implements",
                        "Electrical Quick Raise & Lower (EQRL)",
                        "Suspended brake and clutch pedals for operator comfort",
                        "Self-adjusting, oil-immersed disc brakes for reliable braking",
                        "ROPS with seat belt (optional) for safety compliance",
                        "Stylish design with premium seat, steering wheel, and rubber floor mats"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "Premium Comfort",
                            description: "Premium seat, suspended pedals, and anti-slip rubber mat enhance long-use comfort."
                        },
                        {
                            icon: Parts,
                            title: "Turbocharged Engine",
                            description: "Turbocharged engine with 38% backup torque handles tough tasks efficiently."
                        },
                        {
                            icon: Implements,
                            title: "High Lifting Capacity",
                            description: "Hydraulics support up to 2500 kg for heavy implements and applications."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 5210 GearPro™?",
                            answer: "The 5210 GearPro™ delivers 50 HP (36.5 kW) with a 3-cylinder turbocharged engine."
                        },
                        {
                            question: "What are the key differences between 5050D GearPro™ and 5210 GearPro™?",
                            answer: "The 5210 GearPro™ offers a turbocharged engine, TSS gearbox, higher backup torque (38%), higher optional lifting capacity (up to 2500 kg), and PermaClutch™, which are not available in the 5050D GearPro™."
                        },
                        {
                            question: "Is the 5210 GearPro™ available in 4WD?",
                            answer: "Yes, it is available in both 2WD and 4WD options."
                        },
                        {
                            question: "What is PermaClutch™ in the 5210 GearPro™?",
                            answer: "PermaClutch™ is a durable, maintenance-friendly clutch system that enhances uptime and reliability for heavy-duty tasks."
                        },
                        {
                            question: "What is the lifting capacity of John Deere 5210 GearPro™?",
                            answer: "It comes with 2000 kgf standard lifting capacity and an optional upgrade to 2500 kgf."
                        },
                        {
                            question: "What type of brakes does the 5210 GearPro™ use?",
                            answer: "It uses hydraulically actuated, self-equalizing, self-adjusting oil-immersed disc brakes for superior safety and low maintenance."
                        },
                        {
                            question: "What PTO options are available?",
                            answer: "The tractor comes with dual PTO: Standard (540 @ 2100 RPM) and Economy (540 @ 1600 RPM), along with a Reverse PTO."
                        },
                        {
                            question: "What is the fuel tank capacity of the 5210 GearPro™?",
                            answer: "It has a 68-litre fuel tank."
                        }
                    ]
                },
                {
                    id: "5310-powertech",
                    name: "5310 PowerTech™",
                    displayName: "John Deere 5310 PowerTech™",
                    series: "5e-series",
                    seriesName: "5E Series",
                    hp: "57 HP",
                    hpDetailed: "57 HP (42.7 kW)",
                    rpm: "2100",
                    price: "₹8.7 - ₹10.9 Lakhs",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284424/5310_0_s0rww9.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284424/5310_0_s0rww9.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284420/5310_1_tkjpoc.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284444/5310_2_c3x15u.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284432/5310_3_dghj9r.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284530/5310_4_v5lpza.png"],
                    brochureUrl: Brochure,
                    variants: ["2WD", "4WD"],
                    drive: "2WD & 4WD",
                    engineHP: "57 HP (42.7 kW)",
                    transmission: `12F+4R Collar Shift / TSS or 12F+12R PR Transmission, with 9F+3R creeper speeds`,
                    clutch: "Dual / PermaClutch™",
                    ptoOption: "Standard / Dual / Reverse PTO",
                    description: "John Deere 5310 PowerTech™ is a powerful 57 HP tractor built with Trem IV emission technology and exceptional features like PermaClutch™, JDLink, and high-lift capacity up to 2500 kg, suitable for heavy-duty applications like sugarcane infield haulage and potato planters.",
                    overview: "The 5310 PowerTech™ is designed for high performance and uptime with PermaClutch™ technology, Dual Torque Mode, and JDLink integration. It delivers superior backup torque, advanced LED lighting, CleanPro™ cooling, and is available in 2WD and 4WD variants. Ideal for over 50 agricultural applications including rotary tillers, mulchers, and reversible ploughs.",
                    specifications: {
                        "Engine": "3-cylinder, 57 HP (42.7 kW), 2100 RPM, Trem IV Emission, HPCR Fuel Injection",
                        "Air Filter": "Dry type, Dual element",
                        "Clutch": "Dual / PermaClutch™",
                        "Gear Box": "12 Forward + 4 Reverse (Collar Shift / TSS) or 12F+12R PR Transmission",
                        "Creeper": "9F+3R with additional creeper speeds",
                        "Brakes": "Oil Immersed Disc Brakes",
                        "Hydraulics": "Up to 2500 kg lifting capacity, Category II, ADDC",
                        "Steering": "Power Steering",
                        "PTO": "540 RPM Standard / Economy / Reverse",
                        "Fuel Tank": "68 Litres",
                        "Electricals": "12V Battery, LED Headlamps, Combination Switch",
                        "Tyres 2WD": "Front: 6.5x20 / Rear: 14.9x28 or 16.9x28",
                        "Tyres 4WD": "Front: 9.5x24 / Rear: 16.9x28",
                        "Wheelbase": "2050 mm approx.",
                        "Weight": "Approx. 2400–2600 kg",
                        "Overall Dimensions": "Length: ~3600 mm, Width: ~1900 mm"
                    },
                    features: [
                        "Trem IV emission compliant high-performance engine",
                        "PermaClutch™ Dual Clutch with Dual PTO for durability",
                        "JDLink connectivity for remote tractor monitoring",
                        "12F+4R or 12F+12R GearPro™ transmission options",
                        "High torque backup for heavy-duty operations",
                        "Wider platform with rear floor extension for operator comfort",
                        "500 hours engine oil service interval",
                        "CleanPro™ advanced cooling system",
                        "Stylish LED fascia with louvers for improved aesthetics and visibility"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "Heavy Lift Capacity",
                            description: "Lift up to 2500 kg for implements like sugarcane haulage and reversible ploughs."
                        },
                        {
                            icon: Parts,
                            title: "PermaClutch™ Technology",
                            description: "Maintenance-free clutch with extended life, high durability and ease of operation."
                        },
                        {
                            icon: Implements,
                            title: "JDLink Enabled",
                            description: "Stay connected to your tractor's health and performance from anywhere, anytime."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 5310 PowerTech™?",
                            answer: "The John Deere 5310 PowerTech™ delivers 57 HP (42.7 kW) at 2100 RPM."
                        },
                        {
                            question: "Does John Deere 5310 come in 4WD?",
                            answer: "Yes, John Deere 5310 PowerTech™ is available in both 2WD and 4WD options."
                        },
                        {
                            question: "What is PermaClutch™?",
                            answer: "PermaClutch™ is a durable, dual-clutch system offering smooth performance and lower maintenance."
                        },
                        {
                            question: "What is the lift capacity of the John Deere 5310?",
                            answer: "It offers up to 2500 kg of hydraulic lift capacity for heavy-duty implements."
                        },
                        {
                            question: "What is JDLink in John Deere tractors?",
                            answer: "JDLink is John Deere’s remote monitoring system that helps you track your tractor's status and diagnostics online."
                        },
                        {
                            question: "What is the fuel tank capacity of the 5310 PowerTech™?",
                            answer: "The fuel tank capacity is 68 litres."
                        },
                        {
                            question: "What are the PTO options available?",
                            answer: "Standard, Economy, and Reverse PTO options are available in the 5310 PowerTech™."
                        },
                        {
                            question: "Is the John Deere 5310 suitable for potato planters and haulage?",
                            answer: "Yes, with its 2500 kg lift capacity and powerful torque, it is ideal for such tasks."
                        }
                    ]
                },
                {
                    id: "5405-powertech",
                    name: "5405 PowerTech™",
                    displayName: "John Deere 5405 PowerTech™",
                    series: "5e-series",
                    seriesName: "5E Series",
                    hp: "63 HP",
                    hpDetailed: "63 HP (47 kW)",
                    rpm: "NA",
                    price: "₹4.8 - ₹29 Lakhs",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284442/5405_0_atrqoy.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284442/5405_0_atrqoy.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284447/5405_1avif_fcpo18.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284533/5405_2_ga0ymd.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284452/5405_3_ejezm4.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284543/5405_4_crplcu.png"],
                    brochureUrl: Brochure,
                    variants: ["2WD", "4WD"],
                    drive: "2WD & 4WD",
                    engineHP: "63 HP (47 kW)",
                    transmission: "12F+4R / 12F+12R PR Transmission, 9F+3R with additional creeper speeds, Collar Shift",
                    clutch: "Dual / PermaClutch™",
                    ptoOption: "Standard / Dual / Reverse PTO",
                    description: "John Deere 5405 PowerTech™ is a technologically advanced 63 HP tractor equipped with a turbocharged CRDI engine that complies with Trem IV norms. With features like a combination switch, dual torque mode, CleanPro™ cooling, PermaClutch™, and JDLink, it's perfect for demanding farm applications.",
                    overview: "The 5405 PowerTech™ belongs to the GearPro series, offering greater gear speed options suitable for varied applications. With advanced LED headlamps, radiator dust shield, second SCV, tilt steering, and dual-mode economy & standard switch, this tractor prioritizes operator comfort and performance. The factory-fitted 71-litre fuel tank and 2500 kg lift capacity make it a highly capable performer. Also comes with a 5-year transferable warranty.",
                    specifications: {
                        "Engine": "3029H Turbocharged, CRDI, Trem IV compliant, 63 HP (47 kW)",
                        "Air Filter": "Dry type, dual element",
                        "Clutch": "Dual / PermaClutch™",
                        "Gear Box": "12 Forward + 4 Reverse / 12F+12R Power Reverser",
                        "Creeper": "9F+3R with additional creeper speeds",
                        "Brakes": "Oil Immersed Disc Brakes",
                        "Hydraulics": "2500 kg lift capacity, Category II, ADDC",
                        "Steering": "Tilt Adjustable Power Steering",
                        "PTO": "540 RPM Standard / Economy / Reverse",
                        "Fuel Tank": "71 Litres",
                        "Electricals": "12V Battery, LED Headlamps, Combination Switch",
                        "Tyres 2WD": "Front: 6.5x20 / Rear: 14.9x28 or 16.9x28",
                        "Tyres 4WD": "Front: 9.5x24 / Rear: 16.9x28",
                        "Wheelbase": "NA",
                        "Weight": "NA",
                        "Overall Dimensions": "NA"
                    },
                    features: [
                        "Turbocharged CRDI engine with Trem IV compliance",
                        "GearPro transmission with 12F+4R / 12F+12R speeds",
                        "Dual Torque Mode (Economy & Standard)",
                        "PermaClutch™ for enhanced durability and easy operation",
                        "CleanPro™ cooling with radiator dust screen",
                        "LED headlamps and louvres for better cooling and aesthetics",
                        "Combination switch for light control, like cars",
                        "Tilt steering and ergonomic seat for superior comfort",
                        "Factory-fitted second SCV and 71-litre fuel tank",
                        "5-year transferable warranty"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "High Lift Capacity",
                            description: "2500 kg hydraulic lift for efficient handling of heavy implements like rotavators and mulchers."
                        },
                        {
                            icon: Parts,
                            title: "PermaClutch™ Technology",
                            description: "Reliable dual clutch system offering smooth operation, long life and low maintenance."
                        },
                        {
                            icon: Implements,
                            title: "JDLink Connectivity",
                            description: "Track your tractor's health, status, and efficiency anytime with JDLink."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 5405?",
                            answer: "John Deere 5405 PowerTech™ delivers 63 HP (47 kW)."
                        },
                        {
                            question: "Is the John Deere 5405 available in both 2WD and 4WD?",
                            answer: "Yes, the 5405 is available in both 2WD and 4WD configurations."
                        },
                        {
                            question: "What is the fuel tank capacity of the John Deere 5405?",
                            answer: "It has a 71-litre fuel tank, which is considerable in this segment."
                        },
                        {
                            question: "Does the 5405 PowerTech™ support JDLink?",
                            answer: "Yes, JDLink allows remote monitoring and health diagnostics of the tractor."
                        },
                        {
                            question: "What is the lifting capacity of John Deere 5405?",
                            answer: "It has a hydraulic lifting capacity of 2500 kg."
                        },
                        {
                            question: "What is PermaClutch™ in the 5405?",
                            answer: "PermaClutch™ is a robust, maintenance-free dual clutch system for longer uptime and easy gear shifting."
                        },
                        {
                            question: "What is Dual Torque Mode?",
                            answer: "It provides two operating modes – Standard and Economy – to save fuel and optimize performance."
                        },
                        {
                            question: "What are CAB features in John Deere tractors?",
                            answer: "John Deere CAB tractors include sealed glass, HVAC, deluxe seat, safety features, and complete operator comfort."
                        }
                    ]
                },
                {
                    "id": "5075e-powertech",
                    "name": "5075E PowerTech™",
                    "displayName": "John Deere 5075E PowerTech™",
                    "series": "5e-series",
                    "seriesName": "5E Series",
                    "hp": "74 HP",
                    "hpDetailed": "74 HP (55 kW)",
                    "rpm": "2100 RPM",
                    "price": "₹4.8 - ₹29 Lakhs",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284402/5075_0_gebzxo.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284402/5075_0_gebzxo.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284403/5075_1_w5pf5c.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284399/5075_2_yemged.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284400/5075_3_kmxfy7.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749284417/5075_4_otfatk.png"],
                    brochureUrl: Brochure,
                    "variants": ["2WD", "4WD"],
                    "drive": "2WD & 4WD",
                    "engineHP": "74 HP (55 kW)",
                    "transmission": "12F+4R / 12F+12R PR Transmission / 9F+3R with additional creeper speeds",
                    "clutch": "Standard / Dual",
                    "ptoOption": "Dual Clutch",
                    "description": "John Deere 5075E PowerTech™ is the most powerful and versatile 74 HP John Deere tractor. Loaded with a robust PowerTech engine, this tractor complies with the TREM IV emission norms and features new styling hood with LED headlamp, dual engine mode switch, and increased lifting capacity of 2500kgs.",
                    "overview": "The 5075E PowerTech™ is designed to provide customers with a tractor that not only has an international look, but is also technologically advanced. This heavy-duty tractor has multiple gear options making it suitable for agriculture as well as non-agriculture applications like loader, dozer, and tractor-mounted combine (TMC). Features longer service interval of 500 hours and electronically controlled engine.",
                    "specifications": {
                        "Engine": "John Deere 3029H, 57 HP (42 kW), 2100 RPM, 3 Cylinders, Turbo Charged, HPCR fuel injection system, Coolant cooled with overflow reservoir",
                        "Air Filter": "Dry Type, Dual element",
                        "Clutch": "Dual clutch, Dry clutch, EH clutch (optional)",
                        "Gear Box": "12F + 4R (GearPro Speed), 12F + 12R (PowrReverser Speed), 9F + 3R (Creeper Speed)",
                        "Speed Options": "GearPro Speed- 1.9 to 32.6 Kmph, PowerReverser Speed- 1.4 to 31.3 Kmph and Creeper Speed- 0.35 to 0.87 Kmph",
                        "Brakes": "Oil immersed disc brakes",
                        "Hydraulics": "Maximum Lifting capacity - 2500 kgf",
                        "Steering": "Power steering / Tilt steering option (Open operator station), Power steering / Tilt & Telescopic steering (Cab)",
                        "PTO": "PermaClutch™ Dual Clutch Dual PTO",
                        "Fuel Tank": "Standard capacity",
                        "Electricals": "LED headlamps, Combination Switch",
                        "Tyres 2WD": "Standard configuration",
                        "Tyres 4WD": "4WD configuration available",
                        "Wheelbase": "NA",
                        "Weight": "NA",
                        "Overall Dimensions": "NA"
                    },
                    "features": [
                        "New styling hood with LED headlamp",
                        "Dual Engine Mode switch (Economy & Standard)",
                        "Increased lifting capacity (2500kgs)",
                        "Longer service interval of Engine (500 Hours)",
                        "Electronically controlled Engine",
                        "Dual Torque Mode",
                        "Combination Switch",
                        "Wider platform with rear floor extensions",
                        "CleanPro™ for enhanced cooling",
                        "PermaClutch™ Dual Clutch Dual PTO"
                    ],
                    "standardFeatures": [
                        {
                            "icon": Speed,
                            "title": "High Lift Capacity",
                            "description": "2500 kg hydraulic lift capacity for efficient handling of heavy implements and agricultural applications."
                        },
                        {
                            "icon": Parts,
                            "title": "PermaClutch™ Dual Clutch Dual PTO",
                            "description": "Industry exclusive feature providing great value in terms of uptime due to its Durability, Reliability, Ease of operation and Lower operating cost."
                        },
                        {
                            "icon": Implements,
                            "title": "CleanPro™ Enhanced Cooling",
                            "description": "Reversible fan system for enhanced cooling efficiency, reduced downtime, improved productivity, and extended engine life."
                        }
                    ],
                    "faqs": [
                        {
                            "question": "What is the price of John Deere 5075E?",
                            "answer": "John Deere tractor price ranges from Rs.4.80 lakhs to Rs.29 lakhs. Contact your nearest dealer to know more."
                        },
                        {
                            "question": "What is the HP of John Deere 5075E?",
                            "answer": "John Deere 5075E is a powerful 74 HP tractor equipped with advanced technology. Its powerful turbocharged engine delivers higher lift capacity and unmatched power."
                        },
                        {
                            "question": "What are John Deere 5075E features?",
                            "answer": "John Deere 5075E has Dual Torque Mode, Longer service interval, Combination Switch, and Wider platform with rear floor extensions."
                        },
                        {
                            "question": "Is John Deere 5075E a 2WD Tractor?",
                            "answer": "Yes, John Deere 5075E comes in a 2WD option."
                        },
                        {
                            "question": "Is John Deere 5075E 4WD Tractor?",
                            "answer": "Yes, John Deere 5075E comes in a 4WD option."
                        },
                        {
                            "question": "What is John Deere CAB tractor?",
                            "answer": "John Deere CAB tractors have been designed to provide customers with a tractor that not only has an international look, but is also technologically advanced. Features include four post ROPS, heating, ventilation and air conditioning, dust free and noise free environment."
                        },
                        {
                            "question": "What is PermaClutch™ in the 5075E?",
                            "answer": "PermaClutch™ Dual Clutch Dual PTO is an industry exclusive feature best suitable for applications like TMC, Mulcher, Rotary Tiller, Power Harrow, etc."
                        },
                        {
                            "question": "What is CleanPro™?",
                            "answer": "CleanPro™ is an enhanced cooling system with reversible fan that helps maintain optimal engine operating temperature and prevents overheating."
                        }
                    ]
                },
            ]
        },
        '5m-series': {
            id: '5m-series',
            name: '5M Series',
            fullName: '5M Series Tractor Models',
            image: MSeries,
            hpRange: '75 HP - 150 HP',
            description: 'India’s most powerful tractor with 130 HP, built for high-end performance and advanced farming needs.',
            categoryDescription: 'Meet the John Deere 5130M – India’s largest and most powerful tractor, equipped with cutting-edge technology and engineered for a wide range of demanding agricultural applications.',
            applications: ['Heavy-Duty Agriculture', 'Commercial Farming', 'Advanced Implements Handling'],
            categoryLink: '/tractor-category/5m-series',
            models: [
                {
                    id: "5130m-powertech",
                    name: "5130M",
                    displayName: "John Deere 5130M",
                    series: "5m-series",
                    seriesName: "5M Series",
                    hp: "130 HP",
                    hpDetailed: "130 HP (97 kW)",
                    rpm: "2200 RPM",
                    price: "Contact Dealer",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749286887/5130_0_bjwsqg.png",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749286887/5130_0_bjwsqg.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749286888/5130_1_unicd3.png", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749286888/5130_2_fs0rye.png"],
                    brochureUrl: Brochure,
                    variants: ["4WD"],
                    drive: "4WD",
                    engineHP: "130 HP (97 kW)",
                    transmission: "Powr8 EcoShift Transmission - 32F + 16R, Creeper 16F+8R",
                    clutch: "Fully Synchronized",
                    ptoOption: "Standard: 540, 540E, 1000 RPM / FHFPTO",
                    description: "Introducing the John Deere 5130M, India's largest tractor, boasting an impressive 130 HP and advanced technology for diverse agricultural applications. This smart tractor is designed for maximum productivity, capable of handling heavier implements efficiently, even in tight seasonal windows.",
                    overview: "The 5130M is equipped with cutting-edge technologies like Powr8 Transmission, advanced JDLink™, and innovative FHFPTO feature that allows for simultaneous task execution. With premium comfort features including air suspension seat and premium cab, it ensures a smooth ride during long working hours, making it the perfect blend of power, innovation, and comfort for modern farmers and contractors.",
                    specifications: {
                        Engine: "PowerTech™ Plus Engine - 4.5L 4 cylinders 130 HP Trem-V HPCR engine",
                        "Engine Displacement": "4 cyl, 4.5 L, 2200 Rated Engine Power 130 hp",
                        "Air Filter": "Heavy duty air filter system",
                        "Rated PTO Power": "119.6 hp",
                        "PTO Torque Rise": "30%",
                        "PTO Speeds": "Standard: 540, 540E, 1000 RPM",
                        Clutch: "Fully synchronized transmission clutch",
                        "Gear Box": "Powr8 32F/16R with Creeper",
                        "Transmission Type": "Powr8 EcoShift Transmission - 32F x 16R gears 16 creepers gears",
                        "Speed Range": "Creeper gears with 0.45-2.36 km/h working speed, 40kmph EcoShift at 1750 rpm",
                        Brakes: "Oil immersed disc brakes",
                        "Rear SCV": "Standard 3",
                        "Hydraulic Flow": "97 L/min at Single Rear SCV",
                        "Hitch Lift Capacity": "3700 kg at ball (rear)",
                        Steering: "Power steering with tilt and telescopic adjustment",
                        PTO: "Electro-Hydraulic PTO Control with FHFPTO",
                        "Fuel Tank": "165 Litre capacity",
                        Electricals: "Advanced electrical system with ISOBUS ready",
                        "Tire Size": "540/65R38R1 (R) 480/65R24R1 (F), MFWD",
                        "Unladen Weight": "3,964 kg",
                        Wheelbase: "Standard wheelbase configuration",
                        "Overall Dimensions": "Large frame design"
                    },
                    features: [
                        "India's largest tractor with 130 HP",
                        "Innovative FHFPTO feature for simultaneous task execution",
                        "Powr8 EcoShift Transmission with 32F + 16R gears",
                        "Creeper gears (16F+8R) with 0.45-2.36 km/h working speed",
                        "40kmph EcoShift capability at 1750 rpm",
                        "165 Litre fuel tank capacity",
                        "Premium cab with fully adjustable operator controls",
                        "Air suspension seat for superior comfort",
                        "Electronic Hitch Control with 3700 kg lift capacity",
                        "Electro-Hydraulic PTO Control",
                        "ISOBUS Ready smart tractor technology",
                        "PowerTech™ Plus 4.5L engine with Trem-V compliance",
                        "Advanced JDLink™ connectivity"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "Maximum Lift Capacity",
                            description: "3700 kg hydraulic lift capacity for handling the heaviest implements and agricultural equipment with ease."
                        },
                        {
                            icon: Parts,
                            title: "FHFPTO Technology",
                            description: "Innovative Front Hydraulic Front PTO feature allows for simultaneous task execution, significantly saving time and effort."
                        },
                        {
                            icon: Implements,
                            title: "Powr8 EcoShift Transmission",
                            description: "Advanced fully synchronized transmission with 32F x 16R gears and 16 creeper gears for maximum versatility and fuel efficiency."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 5130M?",
                            answer: "John Deere 5130M delivers an impressive 130 HP, making it India's largest tractor."
                        },
                        {
                            question: "What is FHFPTO in the 5130M?",
                            answer: "FHFPTO (Front Hydraulic Front PTO) is an innovative feature that allows for simultaneous task execution, saving significant time and effort during operations."
                        },
                        {
                            question: "What is the fuel tank capacity of 5130M?",
                            answer: "The 5130M has a large 165-litre fuel tank capacity for extended working hours without frequent refueling."
                        },
                        {
                            question: "What is Powr8 EcoShift Transmission?",
                            answer: "Powr8 EcoShift is a fully synchronized transmission system offering 32F x 16R gears with 16 creeper gears and 40kmph EcoShift capability at 1750 rpm."
                        },
                        {
                            question: "What is the lifting capacity of John Deere 5130M?",
                            answer: "The 5130M has an impressive 3700 kg rear hitch lift capacity, capable of handling the heaviest agricultural implements."
                        },
                        {
                            question: "Is the 5130M ISOBUS ready?",
                            answer: "Yes, the 5130M is ISOBUS ready, making it a smart tractor compatible with modern precision farming technologies."
                        },
                        {
                            question: "What engine does the 5130M use?",
                            answer: "The 5130M features a PowerTech™ Plus 4.5L 4-cylinder engine with 130 HP and Trem-V HPCR technology for superior performance and efficiency."
                        },
                        {
                            question: "What are the premium cab features?",
                            answer: "The premium cab includes fully adjustable operator controls, air suspension seat, electro-hydraulic PTO control, and electronic hitch control for maximum operator comfort."
                        }
                    ]
                }
            ]
        },
        'specialty-series': {
            id: 'specialty-series',
            name: 'Specialty Series',
            fullName: 'Specialty Series Tractor Models',
            image: SpecialtySeries,
            hpRange: '28 HP - 35 HP',
            description: 'Compact, high-utility tractors tailored for specialized farming in orchards, vineyards, and wetlands.',
            categoryDescription: 'Explore John Deere Specialty Tractors, ranging from 28 HP to 35 HP, designed for niche agricultural tasks. These narrow-width, 4WD machines offer exceptional manoeuvrability, comfort, and versatility in orchard farming, intercultural operations, and puddling. Equipped with 8F+8R transmission, dual PTO options, and single-clutch systems, they are built to excel in precision farming applications.',
            applications: ['Orchard Farming', 'Vineyard Cultivation', 'Wetland Farming'],

            categoryLink: '/tractor-category/specialty-series',
            models: [
                {
                    id: "3028en-compact",
                    name: "3028EN",
                    displayName: "John Deere 3028EN",
                    series: "3en-series",
                    seriesName: "3EN Series",
                    hp: "28 HP",
                    hpDetailed: "28 HP (21 kW)",
                    rpm: "2800 RPM",
                    price: "Contact Dealer",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287357/3028_0_mn8kn8.avif",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287357/3028_0_mn8kn8.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287356/3028_1_dvtvzm.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287354/3028_2_apuyl4.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287352/3028_3_oivspp.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287351/3028_4_lqsqkc.avif"],
                    brochureUrl: Brochure,
                    variants: ["4WD"],
                    drive: "4WD",
                    engineHP: "28 HP (21 kW)",
                    transmission: "8F + 8R",
                    clutch: "Dual",
                    ptoOption: "Single",
                    description: "John Deere 3028EN is a 28 HP multipurpose tractor best suited for vineyards, vegetable crops and inter-culture operations. Its slender design and power packed engine provides excellent fuel efficiency and productivity with better engine power producing torque of 14-24%.",
                    overview: "The 3028EN features a narrow track width that ensures low turning radius, making it ideal for vineyards and orchards. With heavy duty four wheel drive (MFWD) and high lifting capacity of 910 kgf, this compact tractor delivers exceptional performance in tight spaces while maintaining the power and reliability expected from John Deere tractors.",
                    specifications: {
                        Engine: "28HP, 2800 RPM, 3 Cylinders, Coolant cooled with overflow reservoir, Naturally Aspirated",
                        "Air Filter": "Dry type, Dual element",
                        Clutch: "Single clutch system",
                        "Gear Box": "8 Forward + 8 Reverse FNR Sync Reverser / Collar Reverser",
                        "Forward Speeds": "Rear tires 8.3*24: 1.6 km/h to 19.5 km/h, Rear tires 9.5*24: 1.7 km/h to 20.7 km/h",
                        "Reverse Speeds": "Rear tires 8.3*24: 1.5 km/h to 18.6km/h, Rear tires 9.5*24: 1.6 km/h to 19.8 km/h",
                        Brakes: "Mechanical disc brakes",
                        "Hydraulic Lift Capacity": "910 kgf",
                        Steering: "Manual steering with low turning radius",
                        PTO: "Single PTO option",
                        "Fuel Tank": "Standard capacity for extended operations",
                        Electricals: "12V system with Key ON/OFF Switch",
                        "Tire Options": "8.3*24 or 9.5*24 rear tires",
                        "Drive Type": "Heavy Duty Four Wheel Drive (MFWD)",
                        Weight: "Compact and lightweight design",
                        "Track Width": "Narrow track width for tight spaces"
                    },
                    features: [
                        "28 HP multipurpose compact tractor",
                        "Power packed 3-cylinder engine at 2800 RPM",
                        "Better engine power producing torque of 14-24%",
                        "High lifting capacity of 910 kgf",
                        "Narrow track width for low turning radius",
                        "Heavy Duty Four Wheel Drive (MFWD)",
                        "8 Forward + 8 Reverse gear transmission",
                        "Key ON/OFF Switch for easy operation",
                        "Slender design for vineyard and orchard operations",
                        "Excellent fuel efficiency and productivity",
                        "Dual element air filter system",
                        "Coolant cooled engine with overflow reservoir"
                    ],
                    standardFeatures: [
                        {
                            icon: "Speed",
                            title: "High Lifting Capacity",
                            description: "910 kgf hydraulic lift capacity ideal for handling various implements in compact farming operations."
                        },
                        {
                            icon: "Parts",
                            title: "Heavy Duty 4WD (MFWD)",
                            description: "Mechanical Front Wheel Drive system providing superior traction and stability in all field conditions."
                        },
                        {
                            icon: "Implements",
                            title: "Narrow Track Design",
                            description: "Slender design with narrow track width ensures low turning radius, perfect for vineyards, orchards and inter-culture operations."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 3028EN?",
                            answer: "John Deere 3028EN delivers 28 HP at 2800 RPM with a 3-cylinder naturally aspirated engine."
                        },
                        {
                            question: "Is the 3028EN suitable for vineyard operations?",
                            answer: "Yes, the 3028EN is specifically designed for vineyards, vegetable crops and inter-culture operations with its narrow track width and low turning radius."
                        },
                        {
                            question: "What is the lifting capacity of 3028EN?",
                            answer: "The 3028EN has a high lifting capacity of 910 kgf, suitable for various agricultural implements."
                        },
                        {
                            question: "Does the 3028EN come with 4WD?",
                            answer: "Yes, the 3028EN features Heavy Duty Four Wheel Drive (MFWD) for superior traction and performance."
                        },
                        {
                            question: "What are the speed ranges of 3028EN?",
                            answer: "Forward speeds range from 1.6-20.7 km/h and reverse speeds from 1.5-19.8 km/h, depending on tire size."
                        },
                        {
                            question: "What makes 3028EN ideal for orchards?",
                            answer: "Its slender design, narrow track width, and low turning radius make it perfect for navigating between trees in orchards and vineyards."
                        },
                        {
                            question: "What is the torque advantage of 3028EN?",
                            answer: "The 3028EN provides better engine power producing 14-24% more torque for improved performance and productivity."
                        },
                        {
                            question: "What transmission does the 3028EN have?",
                            answer: "The 3028EN features 8 Forward + 8 Reverse gear transmission with FNR Sync Reverser/Collar Reverser for smooth operation."
                        }
                    ]
                },
                {
                    id: "3036en-compact",
                    name: "3036EN",
                    displayName: "John Deere 3036EN",
                    series: "3en-series",
                    seriesName: "3EN Series",
                    hp: "35 HP",
                    hpDetailed: "35 HP (25.9 kW)",
                    rpm: "2800 RPM",
                    price: "Contact Dealer",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287348/3036en_1_bm8yap.avif",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287350/3036en_0_lkz9pt.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287348/3036en_1_bm8yap.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287346/3036en_2_aqhwhx.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287345/3036en_3_grgcvy.avif"],
                    brochureUrl: Brochure,
                    variants: ["4WD"],
                    drive: "4WD",
                    engineHP: "35 HP (25.9 kW)",
                    transmission: "8F + 8R",
                    clutch: "Dual",
                    ptoOption: "Single",
                    description: "John Deere 3036EN is a 35 HP multipurpose tractor best suited for vineyards, vegetable crops and inter-culture operations. Its slender design and power packed engine provides excellent fuel efficiency and productivity with better engine power producing torque of 17-28%.",
                    overview: "The 3036EN is a versatile and smart tractor that has become the first choice of many farmers for vineyard, pomegranate, orchard and other vegetable farming. Though small in size, it features strategic positioning of battery and air filter in the front for easy maintenance, bigger tyres providing 320mm ground clearance, and a short turning radius of 1.63 meters for navigating narrow lanes.",
                    specifications: {
                        Engine: "35 HP (25.9 kW), 2800 RPM, 3 Cylinders, Coolant cooled with overflow reservoir, Naturally Aspirated",
                        "Air Filter": "Dry type, Dual element (Primary and Secondary filter) with 99% cleaning efficiency",
                        Clutch: "Single clutch with Over Running Clutch feature",
                        "Gear Box": "8 Forward + 8 Reverse FNR Sync Reverser / Collar Reverser",
                        "Forward Speeds": "Rear tires 8.3*24: 1.6 km/h to 19.5 km/h, Rear tires 9.5*24: 1.7 km/h to 20.7 km/h, Wider tires 280/85 R20: 1.6 km/h to 19.3 km/h",
                        "Reverse Speeds": "Rear tires 8.3*24: 1.5 km/h to 18.6km/h, Rear tires 9.5*24: 1.6 km/h to 19.8 km/h, Wider tires 280/85 R20: 1.5 km/h to 18.4 km/h",
                        Brakes: "Oil immersed disc brakes for easy braking, low maintenance and longer life",
                        "Hydraulic Lift Capacity": "910 kgf",
                        Steering: "Power steering with best in class turning radius of 1.63 m",
                        PTO: "Single PTO with Over Running Clutch",
                        "Fuel Tank": "32 litres capacity for extended operations",
                        Electricals: "12V system with Key ON/OFF Switch, 7 point connector for lighting",
                        "Tire Options": "Multiple variants - 8.3*24, 9.5*24, or wider radial tubeless 280/85 R20",
                        "Drive Type": "Heavy Duty Four Wheel Drive (MFWD)",
                        "Ground Clearance": "320 mm for muddy conditions and ditches",
                        "Overall Width": "Rear tires: 1248 mm, Front tires: 1235 mm",
                        "Safety Features": "Neutral Safety Switch (NSS) and PTO NSS"
                    },
                    features: [
                        "35 HP multipurpose compact tractor at 2800 RPM",
                        "Better engine power producing torque of 17-28%",
                        "High lifting capacity of 910 kgf",
                        "Best in class turning radius of 1.63 m",
                        "Increased front ground clearance of 320 mm",
                        "Wider radial tubeless tires for low ground pressure",
                        "Heavy Duty Four Wheel Drive (MFWD)",
                        "8 Forward + 8 Reverse gear transmission",
                        "Over Running Clutch for implement safety",
                        "Oil immersed disc brakes",
                        "32 litre fuel tank capacity",
                        "Dual element air filter with 99% efficiency",
                        "Strategic battery and air filter positioning",
                        "7 point connector for extended working hours",
                        "Neutral Safety Switch for operator safety",
                        "Spacious floor with wide wheel base"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "Superior Ground Clearance",
                            description: "320 mm ground clearance with bigger tyres allows safe operation in muddy conditions and ditches during rainy season."
                        },
                        {
                            icon: Parts,
                            title: "Over Running Clutch",
                            description: "Allows power flow in only one direction when working with bigger implements like Air Blast Sprayer, preventing reverse power flow and enabling easy braking."
                        },
                        {
                            icon: Implements,
                            title: "Wider Radial Tubeless Tires",
                            description: "Reduces soil compaction leading to better aeration and root development, improving plant growth and yield while preventing sinking in muddy fields."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 3036EN?",
                            answer: "John Deere 3036EN delivers 35 HP (25.9 kW) at 2800 RPM with a 3-cylinder naturally aspirated engine."
                        },
                        {
                            question: "What makes 3036EN suitable for vineyard operations?",
                            answer: "The 3036EN features narrow width design, best in class turning radius of 1.63m, and 320mm ground clearance, making it perfect for vineyards, orchards and inter-culture operations."
                        },
                        {
                            question: "What is the lifting capacity of 3036EN?",
                            answer: "The 3036EN has a high lifting capacity of 910 kgf, suitable for various agricultural implements."
                        },
                        {
                            question: "What is the torque advantage of 3036EN?",
                            answer: "The 3036EN provides better engine power producing 17-28% more torque for improved performance and productivity."
                        },
                        {
                            question: "What tire options are available for 3036EN?",
                            answer: "Multiple tire options are available including 8.3*24, 9.5*24, and wider radial tubeless 280/85 R20 tires for different applications."
                        },
                        {
                            question: "What is Over Running Clutch in 3036EN?",
                            answer: "Over Running Clutch allows power flow in only one direction when working with bigger implements, preventing reverse power flow from PTO to engine and enabling easy braking."
                        },
                        {
                            question: "What safety features does 3036EN have?",
                            answer: "The 3036EN includes Neutral Safety Switch (NSS) and PTO NSS that prevent the tractor from starting if any lever is engaged, ensuring operator safety."
                        },
                        {
                            question: "What is the fuel tank capacity of 3036EN?",
                            answer: "The 3036EN has a 32-litre fuel tank capacity, allowing extended working hours without frequent refueling."
                        }
                    ]
                },
                {
                    id: "3036en-wider-tires",
                    name: "3036EN",
                    displayName: "John Deere 3036EN (With Wider Tires)",
                    series: "3en-series",
                    seriesName: "3EN Series",
                    hp: "35 HP",
                    hpDetailed: "35 HP (25.9 kW)",
                    rpm: "2800 RPM",
                    price: "Contact Dealer",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287350/3036en_0_lkz9pt.avif",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287350/3036en_0_lkz9pt.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287348/3036en_1_bm8yap.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287346/3036en_2_aqhwhx.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287345/3036en_3_grgcvy.avif"],
                    brochureUrl: Brochure,
                    variants: ["4WD Wider Tires"],
                    drive: "4WD",
                    engineHP: "35 HP (25.9 kW)",
                    transmission: "8F + 8R",
                    clutch: "Single",
                    ptoOption: "Single",
                    description: "John Deere 3036EN is a 35 HP multipurpose tractor best suited for vineyards, vegetable crops and inter-culture operations. Its slender design and power packed engine provides excellent fuel efficiency and productivity.",
                    overview: "The 3036EN with wider tires is a multipurpose tractor preferred for vineyard, pomegranate, orchard and other vegetable farming. The narrow track width ensures low turning radius which is ideal for vineyards and orchards, while wider radial tubeless tires provide superior performance and maneuverability.",
                    specifications: {
                        Engine: "35 HP (25.9 kW), 2800 RPM, 3 Cylinders, Coolant cooled with overflow reservoir, Naturally Aspirated",
                        "Air Filter": "Dry type, Dual element for superior filtration",
                        Clutch: "Single clutch system",
                        "Gear Box": "8 Forward + 8 Reverse FNR Sync Reverser / Collar Reverser",
                        "Forward Speeds": "Rear tires 8.3*24: 1.6 km/h to 19.5 km/h, Rear tires 9.5*24: 1.7 km/h to 20.7 km/h, Wider tires 280/85 R20: 1.6 km/h to 19.3 km/h",
                        "Reverse Speeds": "Rear tires 8.3*24: 1.5 km/h to 18.6 km/h, Rear tires 9.5*24: 1.6 km/h to 19.8 km/h, Wider tires 280/85 R20: 1.5 km/h to 18.4 km/h",
                        "Hydraulic Lift Capacity": "910 kgf for heavy implements",
                        Steering: "Power steering with best in class turning radius of 1.63 m",
                        PTO: "Single PTO system",
                        Electricals: "12V system with Key ON/OFF Switch",
                        "Drive Type": "Heavy Duty Four Wheel Drive (MFWD)",
                        "Ground Clearance": "320 mm increased front ground clearance for difficult & wet conditions",
                        "Overall Width": "Rear tires: 1248 mm, Front tires: 1235 mm",
                        "Tire Options": "Multiple variants - 8.3*24, 9.5*24, or wider radial tubeless 280/85 R20"
                    },
                    features: [
                        "35 HP multipurpose tractor at 2800 RPM",
                        "Power packed 3-cylinder naturally aspirated engine",
                        "Better engine power producing torque of 17-28%",
                        "High lifting capacity of 910 kgf",
                        "Best in class turning radius of 1.63 m",
                        "Increased front ground clearance of 320 mm",
                        "Wider radial tubeless tires for low ground pressure",
                        "Heavy Duty Four Wheel Drive (MFWD)",
                        "8 Forward + 8 Reverse FNR transmission",
                        "Narrow track width ideal for vineyards and orchards",
                        "Single clutch system",
                        "Single PTO system",
                        "Coolant cooled engine with overflow reservoir",
                        "Dual element air filter",
                        "Key ON/OFF switch for security",
                        "Multiple tire options available",
                        "Slender design for inter-culture operations",
                        "Excellent fuel efficiency and productivity",
                        "Less soil compaction with wider tires",
                        "Suitable for difficult & wet conditions"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "Best in Class Turning Radius",
                            description: "Narrow track width ensures best in class turning radius of 1.63m, making it ideal for vineyards, orchards and inter-culture operations with excellent maneuverability."
                        },
                        {
                            icon: Parts,
                            title: "High Lifting Capacity",
                            description: "Powerful hydraulic system with 910 kgf lifting capacity handles heavy implements efficiently, combined with 17-28% better engine torque for superior performance."
                        },
                        {
                            icon: Implements,
                            title: "Wider Radial Tubeless Tires",
                            description: "320mm increased front ground clearance and wider radial tubeless tires provide low ground pressure, less soil compaction, and better performance in difficult & wet conditions."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 3036EN?",
                            answer: "John Deere 3036EN delivers 35 HP (25.9 kW) at 2800 RPM with a 3-cylinder naturally aspirated engine."
                        },
                        {
                            question: "What makes 3036EN suitable for vineyard operations?",
                            answer: "The 3036EN features narrow track width with best in class turning radius of 1.63m, slender design, and excellent maneuverability, making it perfect for vineyards, orchards and inter-culture operations."
                        },
                        {
                            question: "What is the lifting capacity of 3036EN?",
                            answer: "The 3036EN has a high lifting capacity of 910 kgf, suitable for handling various heavy agricultural implements efficiently."
                        },
                        {
                            question: "What is the torque advantage of 3036EN?",
                            answer: "The 3036EN provides better engine power producing 17-28% more torque compared to standard tractors, resulting in improved performance and productivity."
                        },
                        {
                            question: "What tire options are available for 3036EN?",
                            answer: "Multiple tire options are available including 8.3*24, 9.5*24, and wider radial tubeless 280/85 R20 tires for different applications and reduced soil compaction."
                        },
                        {
                            question: "What is the ground clearance of 3036EN?",
                            answer: "The 3036EN features increased front ground clearance of 320mm, making it suitable for working in difficult and wet field conditions."
                        },
                        {
                            question: "What transmission does 3036EN have?",
                            answer: "The 3036EN is equipped with 8 Forward + 8 Reverse FNR (Forward-Neutral-Reverse) transmission with Sync Reverser/Collar Reverser for smooth operation."
                        },
                        {
                            question: "What are the benefits of wider tires in 3036EN?",
                            answer: "Wider radial tubeless tires provide low ground pressure, less soil compaction, better traction, and improved performance in various field conditions while maintaining excellent fuel efficiency."
                        }
                    ]
                },
                {
                    id: "3036e-compact",
                    name: "3036E",
                    displayName: "John Deere 3036E",
                    series: "3e-series",
                    seriesName: "3E Series",
                    hp: "35 HP",
                    hpDetailed: "35 HP (25.9 kW)",
                    rpm: "2800 RPM",
                    price: "Contact Dealer",
                    image: "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287341/3036e_2_v9cjty.avif",
                    images: ["https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287344/3036e_0_yntnaj.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287342/3036e_1_vbuhdh.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287341/3036e_2_v9cjty.avif", 
                        "https://res.cloudinary.com/dlzvkjbdd/image/upload/v1749287341/3036e_3_n13ata.avif"],
                    brochureUrl: Brochure,
                    variants: ["4WD"],
                    drive: "4WD",
                    engineHP: "35 HP (25.9 kW)",
                    transmission: "8F + 8R",
                    clutch: "Single",
                    ptoOption: "Dual",
                    description: "John Deere 3036E is a lightweight 35 HP Puddling Special tractor equipped with advance technology and a powerful engine which delivers exceptional performance and power in tough and rugged paddy/rice field applications.",
                    overview: "The 3036E is specifically designed for puddling operations in paddy/rice fields. This lightweight yet powerful tractor features a sharp turning radius, dual PTO system for versatile implement handling, and oil immersed disc brakes for enhanced safety and reduced maintenance in challenging field conditions.",
                    specifications: {
                        Engine: "35 HP (25.9 kW), 2800 RPM, 3 Cylinders, Coolant cooled with overflow reservoir, Naturally Aspirated",
                        "Air Filter": "Dry type, Dual element for superior filtration",
                        Clutch: "Single clutch system",
                        "Gear Box": "8 Forward + 8 Reverse Sync Reverser / Collar Reverser",
                        "Forward Speeds": "1.90 - 22.70 km/h for versatile field operations",
                        "Reverse Speeds": "1.70 - 23.70 km/h for efficient maneuvering",
                        Brakes: "Oil immersed disc brakes for higher safety and less maintenance",
                        Steering: "Stylish skip-free power steering with sharp turning radius",
                        "Turning Radius": "2.6 m with brakes, 2.8 m without brakes",
                        PTO: "Dual PTO system for handling heavy and light applications",
                        Electricals: "12V system with Key ON/OFF Switch",
                        "Drive Type": "Heavy Duty Four Wheel Drive (4WD) with heavy duty front axle",
                        "Safety Features": "ROPS with seat belt (optional), Smart brakes",
                        "Hydraulics": "SCV (Selective Control Valve) as standard feature"
                    },
                    features: [
                        "35 HP lightweight puddling special tractor at 2800 RPM",
                        "Power packed 3-cylinder naturally aspirated engine",
                        "Sharp turning radius of 2.6m with brakes",
                        "Dual PTO for efficient handling of heavy and light applications",
                        "Heavy duty 4WD with robust front axle",
                        "Oil immersed disc brakes for safety and low maintenance",
                        "8 Forward + 8 Reverse transmission",
                        "Stylish skip-free power steering",
                        "SCV as standard feature for hydraulic control",
                        "Coolant cooled engine with overflow reservoir",
                        "Dual element air filter for superior protection",
                        "Side shift control levers for operator comfort",
                        "Key ON/OFF switch for security",
                        "Smart braking system",
                        "ROPS with seat belt option available",
                        "Specially designed for paddy/rice field operations"
                    ],
                    standardFeatures: [
                        {
                            icon: Speed,
                            title: "Sharp Turning Radius",
                            description: "Best-in-class turning radius of 2.6m with brakes enables excellent maneuverability in tight spaces and field corners, perfect for paddy field operations."
                        },
                        {
                            icon: Parts,
                            title: "Dual PTO System",
                            description: "Powerful dual PTO system enables operators to efficiently handle both heavy and light applications, providing versatility for various agricultural implements."
                        },
                        {
                            icon: Implements,
                            title: "Oil Immersed Disc Brakes",
                            description: "Advanced braking system provides higher safety standards and requires less maintenance, ensuring reliable operation in muddy paddy field conditions."
                        }
                    ],
                    faqs: [
                        {
                            question: "What is the horsepower of John Deere 3036E?",
                            answer: "John Deere 3036E delivers 35 HP (25.9 kW) at 2800 RPM with a 3-cylinder naturally aspirated engine."
                        },
                        {
                            question: "What makes 3036E suitable for paddy field operations?",
                            answer: "The 3036E is specifically designed as a puddling special tractor with lightweight construction, sharp turning radius, and robust 4WD system perfect for tough paddy/rice field conditions."
                        },
                        {
                            question: "What is the turning radius of 3036E?",
                            answer: "The 3036E has a sharp turning radius of 2.6m with brakes and 2.8m without brakes, enabling excellent maneuverability in tight field conditions."
                        },
                        {
                            question: "What is special about the PTO system in 3036E?",
                            answer: "The 3036E features a powerful Dual PTO system that enables operators to efficiently handle both heavy and light applications with various agricultural implements."
                        },
                        {
                            question: "What transmission does 3036E have?",
                            answer: "The 3036E is equipped with 8 Forward + 8 Reverse transmission with Sync Reverser/Collar Reverser for smooth operation."
                        },
                        {
                            question: "What are the speed ranges of 3036E?",
                            answer: "The 3036E offers forward speeds of 1.90-22.70 km/h and reverse speeds of 1.70-23.70 km/h for versatile field operations."
                        },
                        {
                            question: "What safety features does 3036E have?",
                            answer: "The 3036E includes oil immersed disc brakes, smart braking system, optional ROPS with seat belt, and Key ON/OFF switch for enhanced operator safety."
                        },
                        {
                            question: "What is SCV in 3036E?",
                            answer: "SCV (Selective Control Valve) comes as a standard feature in 3036E, providing precise hydraulic control for various agricultural implements."
                        }
                    ]
                }
            ]
        }
    },

    // Featured models for AllProducts carousel section
    carousel: [
        {
            id: 1,
            name: "D Series",
            hp: "36 HP - 50 HP",
            image: DSeries,
            description: "Compact utility tractor perfect for small farms",
            categoryLink: "/tractor-category/d-series"
        },
        {
            id: 2,
            name: "E Series",
            hp: "45 HP - 65 HP",
            image: ESeries,
            description: "Mid-range tractor for versatile farming operations",
            categoryLink: "/tractor-category/e-series"
        },
        {
            id: 3,
            name: "5M Series",
            hp: "75 HP - 120 HP",
            image: MSeries,
            description: "Heavy-duty tractor for large-scale farming",
            categoryLink: "/tractor-category/5m-series"
        },
        {
            id: 4,
            name: "Specialty Series",
            hp: "50 HP - 85 HP",
            image: SpecialtySeries,
            description: "Specialized tractors for unique applications",
            categoryLink: "/tractor-category/specialty-series"
        }
    ],

    // Featured specific models for second section of AllProducts
    featuredModels: [
        {
            id: 1,
            name: '5036D',
            displayName: 'John Deere 5036D',
            power: '36 HP',
            description: 'Versatile multipurpose tractor for agricultural and haulage tasks',
            image: DSeries,
            link: '/tractor-model/5036D',
            series: 'D Series',
            price: '₹4.8 - 7.2 Lakhs'
        },
        {
            id: 2,
            name: '5310 PowerTech™',
            displayName: 'John Deere 5310 PowerTech™',
            power: '57 HP',
            description: 'High-performance tractor with PermaClutch™ and JDLink connectivity',
            image: ESeries,
            link: '/tractor-model/5310-powertech',
            series: 'E Series',
            price: '₹8.7 - 10.9 Lakhs'
        },
        {
            id: 3,
            name: '5130M',
            displayName: 'John Deere 5130M',
            power: '130 HP',
            description: 'India\'s largest tractor with advanced FHFPTO technology',
            image: MSeries,
            link: '/tractor-model/5130m-powertech',
            series: '5M Series',
            price: 'Contact Dealer'
        },
        {
            id: 4,
            name: '3036EN',
            displayName: 'John Deere 3036EN',
            power: '35 HP',
            description: 'Compact specialty tractor perfect for vineyard and orchard farming',
            image: SpecialtySeries,
            link: '/tractor-model/3036en-compact',
            series: 'Specialty Series',
            price: 'Contact Dealer'
        }
    ],

    // Helper functions to get data easily
    getAllSeries: () => Object.values(AllTractors.series),
    getSeriesById: (seriesId) => AllTractors.series[seriesId] || null,
    getModelById: (modelId) => {
        for (const series of Object.values(AllTractors.series)) {
            const model = series.models.find(m => m.id === modelId);
            if (model) return model;
        }
        return null;
    },
    getModelsBySeriesId: (seriesId) => {
        const series = AllTractors.series[seriesId];
        return series ? series.models : [];
    },
    getCarouselData: () => AllTractors.carousel,
    getFeaturedModels: () => AllTractors.featuredModels,

    // Additional helper for category page table data
    getCategoryTableData: (seriesId) => {
        const series = AllTractors.series[seriesId];
        if (!series) return null;

        return {
            name: series.fullName,
            description: series.categoryDescription,
            image: series.image,
            models: series.models.map(model => ({
                id: model.id,
                drive: model.drive,
                engineHP: model.engineHP,
                transmission: model.transmission,
                ptoOption: model.ptoOption,
                clutch: model.clutch
            }))
        };
    },

    // Helper for model page detailed data
    getModelDetailData: (modelId) => {
        for (const series of Object.values(AllTractors.series)) {
            const model = series.models.find(m => m.id === modelId);
            if (model) {
                return {
                    name: model.name,
                    series: model.series,
                    seriesName: model.seriesName,
                    hp: model.hp,
                    rpm: model.rpm,
                    description: model.description,
                    brochureUrl: model.brochureUrl,
                    images: model.images,
                    specifications: model.specifications,
                    overview: model.overview,
                    features: model.features,
                    standardFeatures: model.standardFeatures,
                    faqs: model.faqs
                };
            }
        }
        return null;
    }
};

export default AllTractors;