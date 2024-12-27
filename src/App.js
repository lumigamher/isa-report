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

const BUCARAMANGA_DATA = {
  dailyStats: [
    {
      date: "2024-12-25",
      uniqueUsers: 1,
      registeredUsers: 1,
      conversionRate: 100
    },
    {
      date: "2024-12-26",
      uniqueUsers: 7,
      registeredUsers: 2,
      conversionRate: 28.57
    },
    {
      date: "2024-12-27",
      uniqueUsers: 1,
      registeredUsers: 0,
      conversionRate: 0
    }
  ],
  totalUsers: 9,
  registeredUsers: 3,
  conversionRate: 33.33,
  userList: [
      {
          userId: 886,
          username: "Diego Fernando García Ramírez",
          phone: "3162360526",
          messageCount: 3,
          firstMessage: "2024-12-26",
          isRegistered: true,
          age: "-",
          availability: "-"
      },
      {
          userId: 888,
          username: "Daniela Camero Luna",
          phone: "3249333622",
          messageCount: 1,
          firstMessage: "2024-12-26",
          isRegistered: false,
          age: "19",
          availability: "Si"
      },
      {
          userId: 922,
          username: "Juan David Santoyo Jaimes",
          phone: "3204496489",
          messageCount: 2,
          firstMessage: "2024-12-25",
          isRegistered: true,
          age: "17",
          availability: "Si"
      },
      {
          userId: 923,
          username: "Jesús Grimaldos",
          phone: "3133298071",
          messageCount: 3,
          firstMessage: "2024-12-26",
          isRegistered: false,
          age: "17",
          availability: "Si"
      },
      {
          userId: 924,
          username: "Angel Esteban Márquez Duarte",
          phone: "3503230150",
          messageCount: 7,
          firstMessage: "2024-12-26",
          isRegistered: false,
          age: "19",
          availability: "Si"
      },
      {
          userId: 925,
          username: "Laura Garzón",
          phone: "3156064143",
          messageCount: 1,
          firstMessage: "2024-12-26",
          isRegistered: false,
          age: "-",
          availability: "-"
      },
      {
          userId: 927,
          username: "Santiago Cubides",
          phone: "3228977277",
          messageCount: 2,
          firstMessage: "2024-12-26",
          isRegistered: false,
          age: "17",
          availability: "Si"
      },
      {
          userId: 930,
          username: "Cristian Quiroga",
          phone: "3175543945",
          messageCount: 2,
          firstMessage: "2024-12-26",
          isRegistered: false,
          age: "-",
          availability: "-"
      },
      {
          userId: 931,
          username: "Yulexy Paola Peralta Díaz",
          phone: "3118729908",
          messageCount: 2,
          firstMessage: "2024-12-27",
          isRegistered: false,
          age: "-",
          availability: "-"
      }
  ]
};

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
    totalUsers: 9,
    registeredUsers: 3,
    conversionRate: 33.3,
    userList: [
      {
        userId: 266,
        username: "Santiago caicedo barreto",
        phone: "3123313079",
        messageCount: 2,
        isRegistered: false
      },
      {
        userId: 289,
        username: "Elizabeth Perez",
        phone: "3117652435",
        messageCount: 43,
        isRegistered: false
      },
      {
        userId: 378,
        username: "Nicolas Rivera",
        phone: "3165054616",
        messageCount: 6,
        isRegistered: false
      },
      {
        userId: 416,
        username: "Diana Suárez",
        phone: "3153750436",
        messageCount: 3,
        isRegistered: false
      },
      {
        userId: 433,
        username: "Stephanie Devia Arguello",
        phone: "3112634312",
        messageCount: 3,
        isRegistered: true
      },
      {
        userId: 459,
        username: "Nohra Lobatón",
        phone: "3187553083",
        messageCount: 1,
        isRegistered: true
      },
      {
        userId: 486,
        username: "Diana Catalina Sánchez García",
        phone: "3004808345",
        messageCount: 42,
        isRegistered: false
      },
      {
        userId: 493,
        username: "Lizeth López",
        phone: "3144506364",
        messageCount: 9,
        isRegistered: false
      },
      {
        userId: 913,
        username: "laura vanessa lopez nariño",
        phone: "3205473923",
        messageCount: 10,
        isRegistered: false
      }
    ]
};

const REPORT_DATA = {
    bucaramanga: BUCARAMANGA_DATA,
    bogota: BOGOTA_DATA,
    globalCostPerUser: 14286
};

const ChatbotReport = () => {
  return (
      <div className="container mx-auto px-4">
          <div className="h-32"></div>
          
          <div className="flex justify-center mb-8">
              <img 
                  src="/logocampus.png" 
                  alt="Logo" 
                  className="h-24 object-contain"
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
                                      Edad
                                  </th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Disponibilidad
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
                                          {user.age || '-'}
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          {user.availability || '-'}
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