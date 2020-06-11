const {Router} = require('express')
const router = Router()

router.get('/', (req,res)=>{
    res.render('index')

})

router.post('/register', (req,res)=>{
    //usando flasf
    // req.flash('session', req.body)

    //CREAndo el mensjae con flash
    req.flash('message', 'Estas Registrado')
    
    //creando la session
    // req.session.session_var = req.body

    res.redirect('profile')
})

router.get('/profile', (req,res)=>{
    //FLASH
    // const session = req.flash('session')[0]
    // const session = req.flash('message')
    //SESSION
    // const session = req.session.session_var;
    // delete req.session.session_var;
    res.render('profiles')
})

router.get('/productos', (req,res)=>{
    res.render('productos')
})
module.exports = router