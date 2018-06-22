$(document).ready(function(){
    //绑定失去焦点事件
    $("#userName").blur(checkuserName);
    $("#pwd").blur(checkpwd);
    $("#repwd").blur(checkrepwd);
    $("#nickName").blur(checknickName);
    $("#tel").blur(checktel);
    $("#email").blur(checkemail);

    //提交表单,调用验证函数
    $("#registerForm").submit(function () {
      var flag = true;
      if (!checkuserName()) flag = false;
      if (!checkpwd()) flag = false;
      if (!checkrepwd()) flag = false;
      if (!checknickName()) flag = false;
      if (!checktel()) flag = false;
      if (!checkemail()) flag = false;
      return flag;
  });
})

    //验证用户名
    function checkuserName(){
        var $username=$("#userName");
        var $divID=$("#userNameId");
        $divID.html("");
        if ($username.val()==""||$username.val().length<6){
            $divID.removeClass().addClass("error_prompt");
            $divID.html("姓名非空，长度6位以上！");
            
        }
        else{
            $divID.removeClass().addClass("ok_prompt").html("用户名输入正确！");                   
        }
    }
    //验证密码
    function checkpwd(){
        var $pwd=$("#pwd");
        var $divID=$("#pwdId");
        $divID.html("");
        if($pwd.val()==""){
            $divID.removeClass().addClass("error_prompt").html("密码不为空！");
            
        }else if($pwd.val().length<6||$pwd.val().length>16){
            $divID.removeClass().addClass("error_prompt").html("密码长度为6-16！");
            
        }else{
            $divID.removeClass().addClass("ok_prompt").html("输入正确");
            return true;
        }

    }

    //验证第二次密码
    function checkrepwd(){
        var $pwd=$("#pwd");
        var $repwd=$("#repwd");
        var $divID=$("#repwdId");
        $divID.html("");
        if($repwd.val()==""){
            $divID.removeClass().addClass("error_prompt").html("密码不为空！");
        }else if($pwd.val()!=$repwd.val()){
            $divID.removeClass().addClass("error_prompt").html("两次输入的密码不一致，请重新输入！");
        }else{
            $divID.removeClass().addClass("ok_prompt").html("输入正确");
        }

    }

    //验证昵称
    function checknickName(){
        var $nickname=$("#nickName");
        var $divID=$("#nickNameId");
        $divID.html("");
        if ($nickname.val()==""){
            $divID.removeClass().addClass("error_prompt");
            $divID.html("请输入昵称！");
          
        }
        else{
            $divID.removeClass().addClass("ok_prompt").html("昵称输入正确！");                   
        }
    }
    //验证号码
    function checktel(){
        var $tel=$("#tel");
        var $divID=$("#telId");
        $divID.html("");
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
        if($tel.val()==""){
            $divID.removeClass().addClass("error_prompt").html("电话号码为空！");
            
        }else if($tel.val().length!=11&&(!mobile.test($tel.val()))){
            $divID.removeClass().addClass("error_prompt").html("请正确输入电话号码！");
        }else{
            $divID.removeClass().addClass("ok_prompt").html("电话号码输入正确！"); 
        }
    }
    //验证邮箱
    function checkemail(){
        var $email=$("#email");
        var $divID=$("#emailId");
        
        $divID.removeClass().addClass("import_prompt").html("请输入您常用的电子邮箱");
        
    }