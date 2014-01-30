private var isEnable =  false;
 
var target : GameObject;
var speed :float =  3;
var gravity : float = 20.0;
 
function Update () {
 
var controller : CharacterController = GetComponent(CharacterController);
var moveDirection = Vector3.zero;
 
    if(isEnable==true){
 
if (2 < Vector3.Distance(this.transform.position, target.transform.position)) {
var  targetDirection :Vector3 =  Vector3(target.transform.position.x,this.transform.position.y,target.transform.position.z);
this.transform.rotation = Quaternion.Slerp(this.transform.rotation, Quaternion.LookRotation(targetDirection -     this.transform.position), Time.time * 0.1);
 
  moveDirection += transform.forward*1;
 
  moveDirection.y -= gravity * Time.deltaTime;
  controller.Move(moveDirection * Time.deltaTime  *  speed);
 
            }
    }
}
 
function OnTriggerEnter( c : Collider ){
    if(c.name=='Player'){
         isEnable =  true;
         target= c.gameObject;
    }
}
function OnTriggerExit( c : Collider ){
    if(c.name=='Player'){
        isEnable = false;
    }
}