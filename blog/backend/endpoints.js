  const service = require('./service');
  /**
   * @swagger
   * definitions:
   *   User:
   *     type: object
   *     properties:
   *       id:
   *         type: integer
   *       username:
   *         type: string
   *       userType:
   *         type: string
   *         enum:
   *           - regular
   *           - admin
   *       companyId:
   *         type: integer
   */
  /**
   * @swagger
   * definitions:
   *  Users:
   *    type: object
   *    properties:
   *      users:
   *        type: array
   *        items:
   *          $ref: '#/definitions/User'
   */
  /**
   * @swagger
   * definitions:
   *  Error:
   *    type: object
   *    properties:
   *      message:
   *        type: string
   *      internal_code:
   *        type: string
   *
   */
const initializeEndpoints = (app) => {
  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *       - CRUD
   *       - Users
   *     description: Get users
   *     summary: get users
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: header
   *         name: x-company-id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *           default: 1
   *       - in: query
   *         name: orderBy
   *         schema:
   *           type: string
   *           enum:
   *             - asc
   *             - desc
   *           default: asc
   *     responses:
   *       '200':
   *         description: Users were obtained
   *         schema:
   *           $ref: '#/definitions/Users'
   *       '400':
   *         description: Missing parameters
   *         schema:
   *           $ref: '#/definitions/Error'
   *         example:
   *           message: CompanyId is missing
   *           internal_code: missing_parameters
   *
   */

  app.get('/users', (req, res) => res.json({
    id: req.params.id,
    username: 'jeff',
    userType: 'regular',
    companyId: 15,
  }));

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     tags:
   *       - CRUD
   *       - Users
   *     description: Get users
   *     summary: get users
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *       - in: header
   *         name: x-company-id
   *         required: true
   *         schema:
   *           type: integer
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *           default: 1
   *       - in: query
   *         name: orderBy
   *         schema:
   *           type: string
   *           enum:
   *             - asc
   *             - desc
   *           default: asc
   *     responses:
   *       '200':
   *         description: Users were obtained
   *         schema:
   *           $ref: '#/definitions/Users'
   *       '400':
   *         description: Missing parameters
   *         schema:
   *           $ref: '#/definitions/Error'
   *         example:
   *           message: CompanyId is missing
   *           internal_code: missing_parameters
   *
   */

  app.get('/users/:id', (req, res) => res.json({
    id: req.params.id,
    username: 'jeff',
    userType: 'regular',
    companyId: 15,
  }));
}

module.exports = initializeEndpoints;
