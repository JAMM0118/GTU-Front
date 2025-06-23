import { environmentProd } from "./environment-prod";

export const environment = {
  production: true,
  companyName: 'GTU',
  companySubName : 'Administrador',
  backEndGTU_RouteStop : environmentProd.link +'/api/route-management',
  backEndGTU_Users : environmentProd.link +'/api/user-management',
  backEndGTU_Login: environmentProd.link +'/api/auth/login',
  backEndGTU_AssignDriver: environmentProd.link +'/api/assign-driver',
  backEndGTU_ChangePassword: environmentProd.link +'/api/auth/reset-password',
  backEndGTU_ResetPasswordRequest:environmentProd.link + '/api/auth/reset-password-request',

}
