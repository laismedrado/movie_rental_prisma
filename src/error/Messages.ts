const message = {
   
    dontExist: (table : string) => `${table} não existe`,
    userDontExist: 'Usuário não existe.',
    userExist: 'Usuário  existe.',
    movieAlreadyExist: 'Filme já existe.',
    movieDontExist: 'Filme não existe.',
    movieRent: 'Filme já alugado.',
    missingParameter:"Missing parameters",
    recordUniqueField: 'Registro já existe com este %.',
    recordCreated: 'Registro criado com sucesso.',
    recordUpdated: 'Registro atualizado com sucesso',
    recordDeleted: '% registro(s) excluído(s) com sucesso.',
    required: '% é obrigatório.',
    auth: {
      authorized: 'Acesso liberado',
      unauthorized: 'Acesso negado',
      wrongUserPass: 'Usuário ou senha inválidos.',
    },
  };
  
  export default message;
  // message.dontExist('Usuário');
  