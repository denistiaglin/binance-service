import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'

const swagger = (app: any) => {
  const options = {}

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
}

export default swagger
