import {Request, Response} from "express"
import db from '../config/database'

//GET
async function listclients(req: Request, res: Response) {
    db.connection.query('select * from clients', (err, results) => {
            res.json({
                success: true,
                message: 'Listegem de clientes realizada com sucesso',
                data: results
            })
        }
    )
}

//POST
async function createclient(req: Request, res: Response) {
    const querySql = ('INSERT INTO clients(DS_NAME, NM_CELLPHONE, DS_STATUS) VALUES(?,?,?)')
    
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS 
    )

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'cliente cadastrado com sucesso',
            data: results
        })
    })
}

//PUT
async function editclient(req: Request, res: Response) {
    const querySql = ('UPDATE clients SET DS_NAME = ?, NM_CELLPHONE = ?, DS_STATUS = ? where ID_CLIENT')
    
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS,
        req.params.id
    )

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Edição do cliente realizada com sucesso',
            data: results
        })
    })
}

//DELETE
async function deleteclient(req: Request, res: Response) {
    const querySql = ('delete from clients where ID_CLIENT')

    db.connection.query(querySql, [req.params.id], (err, results) => {
        res.json({
            success: true,
            message: 'Cliente deletado com sucesso',
            data: results
        })
    })
}

export default {
    listclients,
    createclient,
    editclient,
    deleteclient
}