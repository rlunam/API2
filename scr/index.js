const express=require('express');
const nodemon=require('nodemon');
const oracledb=require('oracledb');
const morgan=require('morgan')


const PORT = 5000;

const app=express();

app.use(morgan('dev'));
app.use(express.json())
//app.use(cors());


//----------------------------------------------------------------------
//------------------------------create----------------------------------
//----------------------------------------------------------------------
//createPedido
app.get('/createdetallepedido', (req,res,next)=>{
    async function createDetalle_pedido(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{DETALLE_PED_ID,PED_NUMERO,PED_FECHAPED,PED_FECHAENT,_PED_TIPOPAGO,PED_CLIENTE,PED_EMPLEADO,PED_PERSONARECIBE,PAN_CANTIDAD,PAN_PRECIO,PAN_TAMAÑO,PAN_TIPOHARINA,PAN_NOMBRE}=req.body;
            let query=' INSERT INTO FROM CLIENTE ';
            const result=await connection.execute(query, [id])
            //INSERT INTO TABLE (COLUMNAS, COLUMNAS) VALUES (VALORES, VALORES)
            return result.rows;
        } catch (error) {
            return error;
        }
    }
     createPedido()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})


//app.get('/', (req,res,next)=>{
  //  res.send('Hola pibitos');
//});


//EJEMPLO
app.get('/customers', (req,res,next)=>{
    async function fetchDataCustomers(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM CLIENTE');
            return result.rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    fetchDataCustomers()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
});
//----------------------------------------------------------------------
//------------------------------readAll---------------------------------
//----------------------------------------------------------------------
//PEDIDO
app.get('/readalldetallepedido', (req,res,next)=>{
    async function readAllDetalle_pedidos(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM DETALLE_PEDIDO');
        
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllDetalle_pedidos()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//CLIENTE 
app.get('/readallclientes', (req,res,next)=>{
    async function readAllClientes(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM CLIENTE');
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllClientes()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//EMPLEADO
app.get('/readallempleados', (req,res,next)=>{
    async function readAllEmpleados(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM EMPLEADO');
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllEmpleados()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//PROVEEDOR
app.get('/readallproveedores', (req,res,next)=>{
    async function readAllProveedores(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM PROVEEDOR');
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllProveedores()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//SUCURSAL
app.get('/readallsucursales', (req,res,next)=>{
    async function readAllSucursales(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM SUCURSAL');
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllSucursales()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//----------------------------------------------------------------------
//------------------------------readSingle------------------------------
//----------------------------------------------------------------------
//PEDIDO
app.get('/readsingledetallepedido', (req,res,next)=>{
    async function readSingleDetalle_pedido(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Numero_pedido}=req.body;
            let query=' SELECT * FROM DETALLE_PEDIDO WHERE PED_NUMERO=:Numero_pedido';
            const result=await connection.execute(query, [Numero_pedido])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    readSingleDetalle_pedido()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//CLIENTE

app.get('/readsinglecliente', (req,res,next)=>{
    async function readSingleCliente(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Cliente_telefono}=req.body;
            let query=' SELECT * FROM CLIENTE WHERE CLI_TELEFONO=:Cliente_telefono';
            const result=await connection.execute(query, [Cliente_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    readSingleCliente()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//EMPLEADO

app.get('/readsingleempleado', (req,res,next)=>{
    async function readSingleEmpleado(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Empleado_telefono}=req.body;
            let query=' SELECT * FROM EMPLEADO WHERE EMP_TELEFONO=:Empleado_telefono';
            const result=await connection.execute(query, [Empleado_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    readSingleEmpleado()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//PROVEEDOR

app.get('/readsingleproveedor', (req,res,next)=>{
    async function readSingleProveedor(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Proveedor_telefono}=req.body;
            let query=' SELECT * FROM PROVEEDOR WHERE PROV_TELEFONO=:Proveedor_telefono';
            const result=await connection.execute(query, [Proveedor_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    readSingleProveedor()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//SUCURSAL

app.get('/readsinglesucursal', (req,res,next)=>{
    async function readSingleSucursal(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Sucursal_telefono}=req.body;
            let query=' SELECT * FROM SUCURSAL WHERE SUC_TELEFONO=:Sucursal_telefono';
            const result=await connection.execute(query, [Sucursal_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    readSingleSucursal()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//----------------------------------------------------------------------
//------------------------------DELETE----------------------------------
//----------------------------------------------------------------------
//DETALLE_PEDIDO
app.delete('/deletedetallepedido/:Numero_pedido', (req,res,next)=>{
    async function deleteDetalle_pedido(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Numero_pedido}=req.params;
            let query=' DELETE FROM DETALLE_PEDIDO WHERE PED_NUMERO=:Numero_pedido';
            const result=await connection.execute(query, [Numero_pedido])
            console.log(result.rows);
            return result.rows;
        } catch (error) {
            console.log(error);
            return res.send(error);
        }
    }
    deleteDetalle_pedido()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//CLIENTES
app.delete('/deletecliente', (req,res,next)=>{
    async function deleteCliente(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Cliente_telefono}=req.body;
            let query=' DELETE FROM CLIENTE WHERE CLI_TELEFONO=:Cliente_telefono';
            const result=await connection.execute(query, [Cliente_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    deleteCliente()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//EMPLEADO
app.delete('/deleteempleado', (req,res,next)=>{
    async function deleteEmpleado(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Empleado_telefono}=req.body;
            let query=' DELETE FROM EMPLEADO WHERE EMP_TELEFONO=:Empleado_telefono';
            const result=await connection.execute(query, [Empleado_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    deleteEmpleado()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//PROVEEDOR
app.delete('/deleteproveedor', (req,res,next)=>{
    async function deleteProveedor(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Proveedor_telefono}=req.body;
            let query=' DELETE FROM PROVEEDOR WHERE PROV_TELEFONO=:Proveedor_telefono';
            const result=await connection.execute(query, [Proveedor_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    deleteProveedor()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

//SUCURSAL
app.delete('/deletesucursal', (req,res,next)=>{
    async function deleteSucursal(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Sucursal_telefono}=req.body;
            let query=' DELETE FROM SUCURSAL WHERE SUC_TELEFONO=:Sucursal_telefono';
            const result=await connection.execute(query, [Sucursal_telefono])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    deleteSucursal()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//----------------------------------------------------------------------
//------------------------------UPDATE----------------------------------
//----------------------------------------------------------------------
//DETALLE_PEDIDO
app.put('/updatedetallepedido', (req,res,next)=>{
    async function updateDetalle_pedido(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{Numero_pedido}=req.params;
            const{fechaped, fechaent, tipopago, cliente, emepleado, personarecibe, cantidad, precio, tamaño, tipoharina, nombrepan}=req.body;
            let query=' UPDATE FROM DETALLE_PEDIDO SET PED_FECHAPED:fechaped, PED_FECHAENT:fechaent, PED_TIPOPAGO:tipopago, PED_CLIENTE:cliente, PED_EMPLEADO:empleado, PED_PERSONARECIBE:personarecibe, PAN_CANTIDAD:cantidad, PAN_PRECIO:precio, PAN_TAMAÑO:tamaño, PAN_TIPOHARINA:tipoharina, PAN_NOMBRE:nombrepan WHERE PED_NUMERO=:Numero_pedido';
            const result=await connection.execute(query, [Numero_pedido,fechaped, fechaent, tipopago, cliente, emepleado, personarecibe, cantidad, precio, tamaño, tipoharina, nombrepan])
        
            return result.rows;
        } catch (error) {
            return res.send(error);
        }
    }
    updateDetalle_pedido()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})

app.listen(PORT,()=>{
    console.log(`listen on port ${PORT}`);
});

