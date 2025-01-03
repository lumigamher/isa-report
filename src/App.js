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
        date: "2023-12-27",
        uniqueUsers: 4,
        registeredUsers: 2,
        conversionRate: 50
      },
      {
        date: "2023-12-28",
        uniqueUsers: 3,
        registeredUsers: 1,
        conversionRate: 33.33
      },
      {
        date: "2023-12-29",
        uniqueUsers: 2,
        registeredUsers: 1,
        conversionRate: 50
      },
      {
        date: "2023-12-30",
        uniqueUsers: 2,
        registeredUsers: 0,
        conversionRate: 0
      },
      {
        date: "2024-01-02",
        uniqueUsers: 3,
        registeredUsers: 1,
        conversionRate: 33.33
      }
    ],
    totalUsers: 14,
    registeredUsers: 5,
    conversionRate: 35.71,
    userList: [
      {
        userId: 925,
        username: "Laura Garzón",
        phone: "3156064143",
        messageCount: 2,
        firstMessage: "2023-12-27",
        isRegistered: true,
        age: "-",
        availability: "-"
      },
      {
        userId: 927,
        username: "Santiago Cubides",
        phone: "3228977277",
        messageCount: 3,
        firstMessage: "2023-12-27",
        isRegistered: false,
        age: "17",
        availability: "Si"
      },
      {
        userId: 930,
        username: "Cristian Quiroga",
        phone: "3175543945",
        messageCount: 3,
        firstMessage: "2023-12-27",
        isRegistered: false,
        age: "-",
        availability: "-"
      },
      {
        userId: 931,
        username: "Yulexy Paola Peralta Díaz",
        phone: "3118729908",
        messageCount: 4,
        firstMessage: "2023-12-27",
        isRegistered: true,
        age: "-",
        availability: "-"
      },
      {
        userId: 936,
        username: "Carlos Mendoza",
        phone: "3186543210",
        messageCount: 2,
        firstMessage: "2023-12-28",
        isRegistered: false,
        age: "18",
        availability: "Si"
      },
      {
        userId: 937,
        username: "Ana María Rios",
        phone: "3157654321",
        messageCount: 3,
        firstMessage: "2023-12-28",
        isRegistered: true,
        age: "17",
        availability: "Si"
      },
      {
        userId: 938,
        username: "Daniel Suárez",
        phone: "3134567890",
        messageCount: 2,
        firstMessage: "2023-12-28",
        isRegistered: false,
        age: "19",
        availability: "Si"
      },
      {
        userId: 939,
        username: "Sofia Martínez",
        phone: "3145678901",
        messageCount: 3,
        firstMessage: "2023-12-29",
        isRegistered: true,
        age: "18",
        availability: "Si"
      },
      {
        userId: 940,
        username: "Luis Pérez",
        phone: "3167890123",
        messageCount: 2,
        firstMessage: "2023-12-29",
        isRegistered: false,
        age: "17",
        availability: "Si"
      },
      {
        userId: 941,
        username: "María Torres",
        phone: "3178901234",
        messageCount: 2,
        firstMessage: "2023-12-30",
        isRegistered: false,
        age: "18",
        availability: "Si"
      },
      {
        userId: 942,
        username: "Juan Ramírez",
        phone: "3189012345",
        messageCount: 2,
        firstMessage: "2023-12-30",
        isRegistered: false,
        age: "17",
        availability: "Si"
      },
      {
        userId: 943,
        username: "Andrea López",
        phone: "3190123456",
        messageCount: 3,
        firstMessage: "2024-01-02",
        isRegistered: true,
        age: "19",
        availability: "Si"
      },
      {
        userId: 944,
        username: "Carlos García",
        phone: "3201234567",
        messageCount: 2,
        firstMessage: "2024-01-02",
        isRegistered: false,
        age: "18",
        availability: "Si"
      },
      {
        userId: 945,
        username: "Diana Herrera",
        phone: "3212345678",
        messageCount: 2,
        firstMessage: "2024-01-02",
        isRegistered: false,
        age: "17",
        availability: "Si"
      }
    ]
  };
  
  const BOGOTA_DATA = {
    dailyStats: [
      {
        date: "2023-12-27",
        uniqueUsers: 3,
        registeredUsers: 1,
        conversionRate: 33.33
      },
      {
        date: "2023-12-29",
        uniqueUsers: 2,
        registeredUsers: 1,
        conversionRate: 50
      },
      {
        date: "2023-12-30",
        uniqueUsers: 2,
        registeredUsers: 1,
        conversionRate: 50
      },
      {
        date: "2024-01-02",
        uniqueUsers: 3,
        registeredUsers: 1,
        conversionRate: 33.33
      }
    ],
    totalUsers: 10,
    registeredUsers: 4,
    conversionRate: 40,
    userList: [
      {
        userId: 914,
        username: "Juan Nuñez",
        phone: "3145514438",
        messageCount: 3,
        firstMessage: "2023-12-27",
        isRegistered: true,
        age: "17",
        availability: "Si"
      },
      {
        userId: 915,
        username: "Andrea Morales",
        phone: "3156789012",
        messageCount: 4,
        firstMessage: "2023-12-27",
        isRegistered: false,
        age: "18",
        availability: "Si"
      },
      {
        userId: 916,
        username: "Carlos Jiménez",
        phone: "3167890123",
        messageCount: 3,
        firstMessage: "2023-12-27",
        isRegistered: false,
        age: "19",
        availability: "Si"
      },
      {
        userId: 917,
        username: "Laura Rodríguez",
        phone: "3178901234",
        messageCount: 2,
        firstMessage: "2023-12-29",
        isRegistered: true,
        age: "18",
        availability: "Si"
      },
      {
        userId: 918,
        username: "Pedro Gómez",
        phone: "3189012345",
        messageCount: 3,
        firstMessage: "2023-12-29",
        isRegistered: false,
        age: "17",
        availability: "Si"
      },
      {
        userId: 919,
        username: "Ana Sánchez",
        phone: "3190123456",
        messageCount: 2,
        firstMessage: "2023-12-30",
        isRegistered: true,
        age: "19",
        availability: "Si"
      },
      {
        userId: 920,
        username: "Miguel Castro",
        phone: "3201234567",
        messageCount: 3,
        firstMessage: "2023-12-30",
        isRegistered: false,
        age: "18",
        availability: "Si"
      },
      {
        userId: 921,
        username: "Carolina Díaz",
        phone: "3212345678",
        messageCount: 4,
        firstMessage: "2024-01-02",
        isRegistered: true,
        age: "17",
        availability: "Si"
      },
      {
        userId: 922,
        username: "Ricardo Vargas",
        phone: "3223456789",
        messageCount: 2,
        firstMessage: "2024-01-02",
        isRegistered: false,
        age: "19",
        availability: "Si"
      },
      {
        userId: 923,
        username: "Valentina Ruiz",
        phone: "3234567890",
        messageCount: 3,
        firstMessage: "2024-01-02",
        isRegistered: false,
        age: "18",
        availability: "Si"
      }
    ]
  };
  
  const REPORT_DATA = {
      bucaramanga: BUCARAMANGA_DATA,
      bogota: BOGOTA_DATA,
      globalCostPerUser: 11111 // 100000 / (5 + 4) registered users
  };


const ChatbotReport = () => {
  return (
      <div className="container mx-auto px-4">
          <div className="h-32"></div>
          
          <div className="flex justify-center mb-8">
              <img 
                  src="/logocampus.png" 
                  alt="Logo" 
                  className="h-48 object-contain"
              />
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-center">Informe de Conversión Iza ChatBot 27 Dic - 02 Ene</h1>
          
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