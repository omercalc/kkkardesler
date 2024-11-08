const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// kullanıcı oluşturma (create - register)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const defaultAvatar = generateRandomAvatar();

    // E-posta benzersizlik kontrolü
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Bu e-posta adresi zaten kullanılıyor." });
    }

    // Girdi doğrulama
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Tüm alanlar gereklidir." });
    }

    // Şifre hashleme
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Hata:", err);
    res
      .status(500)
      .json({ error: "Kullanıcı oluşturulurken bir hata oluştu." });
  }
});

// kullanıcı girişi (login)

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Girdi doğrulama
        if (!email || !password) {
        return res.status(400).json({ error: "Tüm alanlar gereklidir." });
        }
    
        // Kullanıcı var mı kontrol etme
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
        return res.status(401).json({ error: "Böyle bir kullanıcı yok." });
        }
    
        // Şifre kontrolü
        const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.password
        );
        if (!passwordCorrect) {
        return res.status(401).json({ error: "Hatalı şifre." });
        }
    
        res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        avatar: existingUser.avatar,
        role: existingUser.role,
        
        });
    } catch (err) {
        console.error("Hata:", err);
        res.status(500).json({ error: "Kullanıcı girişi yapılırken bir hata oluştu." });
    }
    }

);

module.exports = router;
