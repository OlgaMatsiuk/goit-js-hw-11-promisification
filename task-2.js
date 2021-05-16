const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  
  const toggleUserState = (allUsers, userName) => {
    return Promise.resolve (allUsers.map (user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ));
  
  };
  
  const loger = updatedUsers => console.table(updatedUsers);
  

  toggleUserState(users, 'Mango').then(loger);
  toggleUserState(users, 'Lux').then(loger);