const call_file =require('child_process');

 function loadRosMap(map_name){
  call_file.execFile(__dirname+"/../../sh/load_map.sh",[map_name],null,function(err,stdout,stderr){
      console.log("map_load success");
      console.log(stdout);
      console.log(map_name);
      // console.log(err);

  });
  call_file.execFile(__dirname+"/../../sh/start_amcl.sh",null,function(err,stdout,stderr){
      console.log("localization success");
  })
}
 function  startRosSlam(){
    const result=call_file.execFile(__dirname+"/../../sh/start_map.sh",null,function(err,stdout,stderr){
    if(err)
    {
        console.log(err);
        return err;
    }
    console.log("map_start success");
    console.log(stdout);
    return stdout;
  });
}
function  endRosSlam(){
  console.log("go to end slam")
  call_file.execFile(__dirname+"/../../sh/stop_map.sh",null,function(err,stdout,stderr){
  if(err)
  {
      console.log(err);
      return err;
  }
  console.log("slam end process success");
  console.log(stdout);
  return stdout;
  // this.ctx.body={
  //   stdout
  // }
});
}
module.exports ={
  loadRosMap,
  startRosSlam,
  endRosSlam
}
