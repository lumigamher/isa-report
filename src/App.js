import React from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    LabelList
} from 'recharts';

// Datos constantes para Bucaramanga
const BUCARAMANGA_DATA = {
    dailyStats: [
      {
        date: "2024-12-03",
        uniqueUsers: 3,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-04",
        uniqueUsers: 11,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-05",
        uniqueUsers: 5,
        registeredUsers: 11,
        conversionRate: 220
      },
      {
        date: "2024-12-06",
        uniqueUsers: 4,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-07",
        uniqueUsers: 2,
        registeredUsers: 3,
        conversionRate: 150
      },
      {
        date: "2024-12-08",
        uniqueUsers: 1,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-09",
        uniqueUsers: 10,
        registeredUsers: 6,
        conversionRate: 60
      },
      {
        date: "2024-12-10",
        uniqueUsers: 14,
        registeredUsers: 5,
        conversionRate: 35.71
      },
      {
        date: "2024-12-11",
        uniqueUsers: 6,
        registeredUsers: 5,
        conversionRate: 83.33
      },
      {
        date: "2024-12-12",
        uniqueUsers: 9,
        registeredUsers: 19,
        conversionRate: 211.11
      },
      {
        date: "2024-12-13",
        uniqueUsers: 6,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-16",
        uniqueUsers: 2,
        registeredUsers: 3,
        conversionRate: 150
      },
      {
        date: "2024-12-17",
        uniqueUsers: 4,
        registeredUsers: 11,
        conversionRate: 275
      },
      {
        date: "2024-12-18",
        uniqueUsers: 15,
        registeredUsers: 19,
        conversionRate: 126.67
      },
      {
        date: "2024-12-19",
        uniqueUsers: 18,
        registeredUsers: 11,
        conversionRate: 61.11
      },
      {
        date: "2024-12-20",
        uniqueUsers: 2,
        registeredUsers: 0,
        conversionRate: 0
      }
    ],
    totalUsers: 80,
    registeredUsers: 16,
    conversionRate: 20,
    userList: [
      {
        "userId": 242,
        "username": "Mayudis novoa",
        "phone": "3114141533",
        "messageCount": 7,
        "isRegistered": false
      },
      {
        "userId": 246,
        "username": "Daniela Herrera",
        "phone": "3193671889",
        "messageCount": 9,
        "isRegistered": false
      },
      {
        "userId": 247,
        "username": "Diego",
        "phone": "3006176546",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 248,
        "username": "Luis Miguel",
        "phone": "3505343701",
        "messageCount": 57,
        "isRegistered": false
      },
      {
        "userId": 267,
        "username": "Daniel Florez",
        "phone": "3174393185",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 268,
        "username": "Lizbeth Pérez",
        "phone": "3178293265",
        "messageCount": 15,
        "isRegistered": false
      },
      {
        "userId": 282,
        "username": "Marcela parra",
        "phone": "3173042327",
        "messageCount": 7,
        "isRegistered": false
      },
      {
        "userId": 292,
        "username": "Paula",
        "phone": "3165726867",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 375,
        "username": "Edgar Leonardo Acevedo Arteaga",
        "phone": "3123702080",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 377,
        "username": "diana",
        "phone": "3185296898",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 380,
        "username": "Juan camilo moreno valencia",
        "phone": "3160501684",
        "messageCount": 11,
        "isRegistered": true
      },
      {
        "userId": 384,
        "username": "Carolina Vesga Mantilla",
        "phone": "3013496749",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 385,
        "username": "Emerson Mendez",
        "phone": "3134005533",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 415,
        "username": "Luis Esteban Ramirez Campo",
        "phone": "3112158147",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 417,
        "username": "Juan Carrillo",
        "phone": "3052910133",
        "messageCount": 3,
        "isRegistered": true
      },
      {
        "userId": 431,
        "username": "Luciana Mejía",
        "phone": "3173305716",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 434,
        "username": "Flor Nayibe Rojas Angarita",
        "phone": "3011255539",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 437,
        "username": "keinner contreras",
        "phone": "3177061845",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 438,
        "username": "Karol rodriguez",
        "phone": "3237409106",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 457,
        "username": "José Raúl Gutierrez serrano",
        "phone": "3107513956",
        "messageCount": 4,
        "isRegistered": true
      },
      {
        "userId": 458,
        "username": "Ronald Quintero",
        "phone": "3042779574",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 470,
        "username": "John Pachón",
        "phone": "3027121033",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 472,
        "username": "Edwin Corredor",
        "phone": "3212470598",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 473,
        "username": "Laura Alvira Bolivar",
        "phone": "3017495724",
        "messageCount": 2,
        "isRegistered": true
      },
      {
        "userId": 479,
        "username": "Alexa Villamizar",
        "phone": "3182606525",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 482,
        "username": "Michell Quintero",
        "phone": "3124561578",
        "messageCount": 2,
        "isRegistered": true
      },
      {
        "userId": 483,
        "username": "Andrés Pabón",
        "phone": "3163131225",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 484,
        "username": "Juliana Pallares",
        "phone": "3242592844",
        "messageCount": 3,
        "isRegistered": true
      },
      {
        "userId": 485,
        "username": "Gina Ortiz",
        "phone": "3134682196",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 487,
        "username": "Edwin Santos",
        "phone": "3187398720",
        "messageCount": 7,
        "isRegistered": false
      },
      {
        "userId": 490,
        "username": "Carla Juliana Cala López",
        "phone": "3245824018",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 492,
        "username": "Felipe Orostegui",
        "phone": "3143601786",
        "messageCount": 36,
        "isRegistered": false
      },
      {
        "userId": 495,
        "username": "Daniela Forero",
        "phone": "3112449935",
        "messageCount": 34,
        "isRegistered": false
      },
      {
        "userId": 497,
        "username": "SARA",
        "phone": "3224249095",
        "messageCount": 10,
        "isRegistered": false
      },
      {
        "userId": 498,
        "username": "Isabel Cristina Bernal",
        "phone": "3013920198",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 499,
        "username": "Patricia Flórez Leon",
        "phone": "3105821653",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 500,
        "username": "Diego Andres Sandoval Bernal",
        "phone": "3184775356",
        "messageCount": 4,
        "isRegistered": false
      },
      {
        "userId": 509,
        "username": "david santiago lopez castillo",
        "phone": "3152299308",
        "messageCount": 5,
        "isRegistered": true
      },
      {
        "userId": 510,
        "username": "Ruby",
        "phone": "3332892766",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 520,
        "username": "Luis Felipe capacho",
        "phone": "3028229401",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 522,
        "username": "Daniela Barcenas",
        "phone": "3232000939",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 526,
        "username": "Maikol Andrehy Romero Amado",
        "phone": "3176097364",
        "messageCount": 1,
        "isRegistered": true
      },
      {
        "userId": 533,
        "username": "santiago laguado",
        "phone": "3157645002",
        "messageCount": 6,
        "isRegistered": false
      },
      {
        "userId": 535,
        "username": "Adriana Martínez",
        "phone": "3187264090",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 541,
        "username": "Maria Jose Sepúlveda Duran",
        "phone": "3215511204",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 545,
        "username": "Daniel franco",
        "phone": "3102624948",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 554,
        "username": "Juan pablo Quijano Martinez",
        "phone": "3166365224",
        "messageCount": 7,
        "isRegistered": false
      },
      {
        "userId": 556,
        "username": "SARA SOFIA ROMERO VERGEL",
        "phone": "3213826424",
        "messageCount": 18,
        "isRegistered": true
      },
      {
        "userId": 561,
        "username": "Mónica Mendoza",
        "phone": "3167365590",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 563,
        "username": "Alvaro Sandoval",
        "phone": "3102543158",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 564,
        "username": "Alejandra Salamanca",
        "phone": "3154308011",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 571,
        "username": "Juan Diego Arias",
        "phone": "3022548920",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 576,
        "username": "Yahir Martinez",
        "phone": "3042112508",
        "messageCount": 1,
        "isRegistered": true
      },
      {
        "userId": 581,
        "username": "Juan David León Lozano",
        "phone": "3223963434",
        "messageCount": 14,
        "isRegistered": false
      },
      {
        "userId": 582,
        "username": "Sebastian Beltran Mercado",
        "phone": "3148075060",
        "messageCount": 4,
        "isRegistered": false
      },
      {
        "userId": 594,
        "username": "Fabián Triana",
        "phone": "3118001005",
        "messageCount": 7,
        "isRegistered": true
      },
      {
        "userId": 595,
        "username": "Sergio Avella",
        "phone": "3172275658",
        "messageCount": 4,
        "isRegistered": true
      },
      {
        "userId": 609,
        "username": "Kristian Martínez",
        "phone": "3157143103",
        "messageCount": 6,
        "isRegistered": false
      },
      {
        "userId": 618,
        "username": "Juan Diego Caicedo Barrera",
        "phone": "3134917487",
        "messageCount": 6,
        "isRegistered": false
      },
      {
        "userId": 641,
        "username": "Jenny hernandez",
        "phone": "3007628904",
        "messageCount": 4,
        "isRegistered": false
      },
      {
        "userId": 643,
        "username": "Juan David Saavedra Jaimez",
        "phone": "3155916726",
        "messageCount": 14,
        "isRegistered": true
      },
      {
        "userId": 647,
        "username": "Jose Guillermo Paul Diaz",
        "phone": "3178001452",
        "messageCount": 17,
        "isRegistered": false
      },
      {
        "userId": 648,
        "username": "maria",
        "phone": "3015915566",
        "messageCount": 7,
        "isRegistered": false
      },
      {
        "userId": 653,
        "username": "ajsldjf dlafl lads alsl",
        "phone": "3202782481",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 707,
        "username": "Carla cala",
        "phone": "3015386636",
        "messageCount": 4,
        "isRegistered": false
      },
      {
        "userId": 712,
        "username": "Julio Chaverra",
        "phone": "3113060365",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 747,
        "username": "dsal asdn a ld",
        "phone": "3202790465",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 766,
        "username": "Santiago",
        "phone": "3157450022",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 769,
        "username": "Juan felipe zapata vergel",
        "phone": "3185592261",
        "messageCount": 1,
        "isRegistered": true
      },
      {
        "userId": 770,
        "username": "Mateo Roman",
        "phone": "3162365244",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 772,
        "username": "Cristian David Sandoval Jaimes",
        "phone": "3133890174",
        "messageCount": 1,
        "isRegistered": false
      },
      {
        "userId": 773,
        "username": "OverMarin",
        "phone": "3508600130",
        "messageCount": 2,
        "isRegistered": true
      },
      {
        "userId": 777,
        "username": "sergio rojas",
        "phone": "3008764070",
        "messageCount": 5,
        "isRegistered": false
      },
      {
        "userId": 843,
        "username": "Nicolas Maldonado",
        "phone": "3025467864",
        "messageCount": 1,
        "isRegistered": false
        },
        {
        "userId": 847,
        "username": "Brayan David Vera Mesa",
        "phone": "3165879239",
        "messageCount": 3,
        "isRegistered": false
        },
        {
        "userId": 848,
        "username": "Juan Sebastian Gutierrez",
        "phone": "3003554331",
        "messageCount": 1,
        "isRegistered": false
        },
        {
        "userId": 858,
        "username": "Pepe",
        "phone": "3025467843",
        "messageCount": 6,
        "isRegistered": false
        },
        {
        "userId": 875,
        "username": "paul skjf skdd skfj",
        "phone": "3202790563",
        "messageCount": 11,
        "isRegistered": false
        },
        {
        "userId": 881,
        "username": "Danilo Galeano",
        "phone": "3123130719",
        "messageCount": 8,
        "isRegistered": true
        },
        {
        "userId": 888,
        "username": "Daniela Camero Luna",
        "phone": "3249333622",
        "messageCount": 2,
        "isRegistered": false
        }
    ]
};

// Datos constantes para Bogotá
const BOGOTA_DATA = {
    dailyStats: [
      {
        date: "2024-12-04",
        uniqueUsers: 2,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-05",
        uniqueUsers: 3,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-09",
        uniqueUsers: 4,
        registeredUsers: 4,
        conversionRate: 100
      },
      {
        date: "2024-12-10",
        uniqueUsers: 2,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-11",
        uniqueUsers: 1,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-12-16",
        uniqueUsers: 1,
        registeredUsers: 0,
        conversionRate: 0
      }
    ],
    totalUsers: 8,
    registeredUsers: 2,
    conversionRate: 25,
    userList: [
      {
        "userId": 266,
        "username": "Santiago caicedo barreto",
        "phone": "3123313079",
        "messageCount": 2,
        "isRegistered": false
      },
      {
        "userId": 289,
        "username": "Elizabeth Perez",
        "phone": "3117652435",
        "messageCount": 43,
        "isRegistered": false
      },
      {
        "userId": 378,
        "username": "Nicolas Rivera",
        "phone": "3165054616",
        "messageCount": 6,
        "isRegistered": false
      },
      {
        "userId": 416,
        "username": "Diana Suárez",
        "phone": "3153750436",
        "messageCount": 3,
        "isRegistered": false
      },
      {
        "userId": 433,
        "username": "Stephanie Devia Arguello",
        "phone": "3112634312",
        "messageCount": 3,
        "isRegistered": true
      },
      {
        "userId": 459,
        "username": "Nohra Lobatón",
        "phone": "3187553083",
        "messageCount": 1,
        "isRegistered": true
      },
      {
        "userId": 486,
        "username": "Diana Catalina Sánchez García",
        "phone": "3004808345",
        "messageCount": 42,
        "isRegistered": false
      },
      {
        "userId": 493,
        "username": "Lizeth López",
        "phone": "3144506364",
        "messageCount": 9,
        "isRegistered": false
      }
    ]
};

const REPORT_DATA = {
    bucaramanga: BUCARAMANGA_DATA,
    bogota: BOGOTA_DATA,
    globalCostPerUser: 16667
};

const ChatbotReport = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="h-32"></div>
            <div className="flex justify-center mb-8">
                <img 
                    src="/logocampus.png" 
                    alt="Logo" 
                    className="h-56 object-contain"
                />
            </div>
            <h1 className="text-3xl font-bold mb-8 text-center">Informe de Conversión ChatBot</h1>
            
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <h2 className="text-xl font-semibold mb-2">Costo Global por Usuario Registrado</h2>
                <p className="text-2xl">
                    ${REPORT_DATA.globalCostPerUser.toLocaleString('es-CO', { maximumFractionDigits: 0 })} COP
                </p>
            </div>

            {['bucaramanga', 'bogota'].map(city => (
                <div key={city} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 capitalize">{city}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Usuarios Totales</h3>
                            <p className="text-2xl">{REPORT_DATA[city].totalUsers}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Usuarios Registrados</h3>
                            <p className="text-2xl">{REPORT_DATA[city].registeredUsers}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Tasa de Conversión</h3>
                            <p className="text-2xl">{REPORT_DATA[city].conversionRate.toFixed(2)}%</p>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow mb-8">
                        <h3 className="text-lg font-semibold mb-4">Tasa de Conversión Diaria</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={REPORT_DATA[city].dailyStats}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis domain={[0, 'auto']} />
                                    <Tooltip />
                                    <Legend />
                                    <Line 
                                        type="monotone" 
                                        dataKey="conversionRate" 
                                        name="Tasa de Conversión (%)" 
                                        stroke="#8884d8"
                                    >
                                        <LabelList 
                                            dataKey="conversionRate" 
                                            position="top"
                                            formatter={(value) => `${value.toFixed(1)}%`}
                                        />
                                    </Line>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow mb-8">
                        <h3 className="text-lg font-semibold mb-4">Usuarios por Día</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={REPORT_DATA[city].dailyStats}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="uniqueUsers" name="Usuarios Únicos" fill="#8884d8">
                                        <LabelList dataKey="uniqueUsers" position="top" />
                                    </Bar>
                                    <Bar dataKey="registeredUsers" name="Usuarios Registrados" fill="#82ca9d">
                                        <LabelList dataKey="registeredUsers" position="top" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
                        <h3 className="text-lg font-semibold mb-4">Lista de Usuarios</h3>
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Usuario
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Teléfono
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Mensajes
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {REPORT_DATA[city].userList.map((user) => (
                                    <tr key={user.userId}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.username}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.messageCount}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                user.isRegistered 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                                {user.isRegistered ? 'Registrado' : 'No Registrado'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatbotReport;