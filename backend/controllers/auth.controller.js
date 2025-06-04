const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.User;

// REGISTRO DE USUARIO
exports.register = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const existingUser = await User.findOne({ where: { correo } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está en uso' });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear usuario
    const user = await User.create({
      nombre,
      correo,
      password: hashedPassword,
      rol
    });

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const user = await User.findOne({ where: { correo } });

    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol },
      'clave_secreta_super_segura',  // después lo moveremos a .env
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};
