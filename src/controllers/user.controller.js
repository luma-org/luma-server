import user from '../services/user.service.js';

// Controller using sign up service with try catch for error handling
const create = async (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint para registrar un usuario.'
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Datos del usuario',
            required: true,
            schema: {
                email: 'example@gmail.com',
                password: 'password',
                first_name: 'First',
                last_name: 'Last'
            }
        }
  */
  try {
    const { email, password, first_name, last_name } = req.body;
    const { data, error } = await user.create(email, password, first_name, last_name);
    if (error) {
      const statusCode = error.status ? parseInt(error.status) : 500;
      return res.status(statusCode).send(error.message);
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Controller for reseting password
const resetPassword = async (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint para resetear la contraseña de un usuario.'
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Datos del usuario',
            required: true,
            schema: {
                userId: 'abc123',
                newPassword: 'password'
            } 
        }
  */
  try {
    const { userId, newPassword } = req.body;
    const { data, error } = await user.resetPassword(userId, newPassword);
    if (error) {
                  const statusCode = error.status ? parseInt(error.status) : 500;
            return res.status(statusCode).send(error.message);
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Controller for sending otp
const sendOtp = async (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint para enviar un OTP a un usuario.'
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Datos del usuario',
            required: true,
            schema: {
                email: 'example@gmail.com'
            }
        }
  */
  try {
    const { email } = req.body;
    const { data, error } = await user.sendOtp(email);
    if (error) {
                  const statusCode = error.status ? parseInt(error.status) : 500;
            return res.status(statusCode).send(error.message);
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Controller for verifying otp
const verifyOtp = async (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint para verificar un OTP de un usuario.'
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Datos del usuario',
            required: true,
            schema: {
                email: 'example@gmail.com',
                token: 'abc123'
            }
        }
  */
  try {
    const { email, token } = req.body;
    const { data, error } = await user.verifyOtp(email, token);
    if (error) {
                  const statusCode = error.status ? parseInt(error.status) : 500;
            return res.status(statusCode).send(error.message);
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getByIdAdmin = async (req, res) => {
  /* #swagger.tags = ['Admin / User']
     #swagger.description = 'Endpoint para obtener un usuario por su ID (para admins).'
     #swagger.parameters['id'] = { 
         description: 'ID del usuario',
         type: 'string',
         required: true
     }
     #swagger.parameters['columns'] = {
         description: 'Comma-separated list of columns to select (optional)',
         type: 'string',
         required: false
     }
  */
  try {
    const { id } = req.params;
    const { columns } = req.query; // Extract columns from the query parameters

    const { data, error } = await user.getById(id, columns || '*'); // Pass columns if available, otherwise default to '*'
    
    if (error) {
      const statusCode = error.status ? parseInt(error.status) : 500;
      return res.status(statusCode).send(error.message);
    }

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getById = async (req, res) => {
  /* #swagger.tags = ['User']
     #swagger.description = 'Endpoint para obtener un usuario por su ID (para el cliente).'
     #swagger.parameters['id'] = { 
         description: 'ID del usuario',
         type: 'string',
         required: true
     }
  */
  try {
    const { id } = req.params;
    const columns = "Usuario_ID,nombre,apellido,correo,nivel,monedas,foto,Idioma_ID,ultimoInicioSesion,eliminado"
    const { data, error } = await user.getById(id, columns); 
    
    if (error) {
      const statusCode = error.status ? parseInt(error.status) : 500;
      return res.status(statusCode).send(error.message);
    }

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


export default {
  create,
  resetPassword,
  sendOtp,
  verifyOtp,
  getByIdAdmin,
  getById,
};