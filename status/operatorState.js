/*
 * @Description: error msg define
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 01:44:12
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 10:58:41
 */ 

module.exports={
/***
 * @code Description  
 * including: it includes 3 number like 100. 
 * first number: the error object like user,map
 * second number: operator error like login,register 
 * third number:  error detail like not found ,pass error
 * ***/
  USER:{
    LOGIN:{
      LOGIN_SUCCESS :{
        msg: 'user login success',
        code: 100
      },   
      PARAM_INVALIDE:{
        msg: 'user login error : invalid param in your data',
        code: 101
      },
      USERNAME_NOT_FOUND:{
        msg: 'user login error :username not be found in db',
        code: 102
      },
      PASSWORD_ERROR:{
        msg: 'user login error:password is not correct',
        code: 103
      },
    },
    REGISTER:{
      REGISTER_SUCCESS :{
        msg: 'user register success',
        code: 110
      },   
      PARAM_INVALIDE:{
        msg: 'user register error : invalid param in your data',
        code: 111
      },
      USERNAME_EXIST: {
           msg: 'user register error:user has exited ',
           code: 112
      },
  
    }  
    
  },
  
}