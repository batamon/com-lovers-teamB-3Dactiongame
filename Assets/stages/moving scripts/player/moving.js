#pragma strict

var walkSpeed : float = 23.0;
var gravity : float = 20.0;
var jumpSpeed : float = 40.0;
var springSpeed : float = 30.0;
var jumped : boolean = false;
var nidan : boolean;
private var velocity : Vector3;
var doki : boolean = true;

//var cameraTransform = Camera.main.transform;
//var forward = cameraTransform.TransformDirection(Vector3.forward);

function Start () {
	
}

var spring : boolean = false;
function Spring() {
    velocity.y += 50;
    spring = true;
}

function Update () {
	
//	rigidbody.WakeUp();
	
	var controller : CharacterController = GetComponent(CharacterController);
	
	if(controller.isGrounded){
		spring = false;
		nidan = false;
		velocity = Vector3(Input.GetAxis("Horizontal") * walkSpeed, 0, Input.GetAxis("Vertical") * walkSpeed);
		
		//---------------keybord
		if(velocity.x>0){
		velocity.x -= Mathf.Abs(Input.GetAxis("Horizontal")) * Mathf.Abs(Input.GetAxis("Vertical") * walkSpeed / 2.6);}
		else{
		velocity.x += Mathf.Abs(Input.GetAxis("Horizontal")) * Mathf.Abs(Input.GetAxis("Vertical") * walkSpeed / 2.6);}
		if(velocity.z>0){
		velocity.z -= Mathf.Abs(Input.GetAxis("Vertical")) * Mathf.Abs(Input.GetAxis("Horizontal") * walkSpeed / 2.6);}
		else{
		velocity.z += Mathf.Abs(Input.GetAxis("Vertical")) * Mathf.Abs(Input.GetAxis("Horizontal") * walkSpeed / 2.6);}
		//---------------
		
		//transform.LookAt(transform.position + velocity);
		transform.LookAt(Vector3(transform.position.x + velocity.x, transform.position.y, transform.position.z + velocity.z));
		
		if(Input.GetButtonDown("Jump")){//Get Jump
			velocity.y = jumpSpeed;
			jumped = true;
			nidan = true;
		}// Get Jump
		
		
	}
	
	else {
		
		velocity = Vector3(Input.GetAxis("Horizontal") * walkSpeed, velocity.y, Input.GetAxis("Vertical") * walkSpeed);
		
		//---------------keybord
		if(velocity.x>0){
		velocity.x -= Mathf.Abs(Input.GetAxis("Horizontal")) * Mathf.Abs(Input.GetAxis("Vertical") * walkSpeed / 2.6);}
		else{
		velocity.x += Mathf.Abs(Input.GetAxis("Horizontal")) * Mathf.Abs(Input.GetAxis("Vertical") * walkSpeed / 2.6);}
		if(velocity.z>0){
		velocity.z -= Mathf.Abs(Input.GetAxis("Vertical")) * Mathf.Abs(Input.GetAxis("Horizontal") * walkSpeed / 2.6);}
		else{
		velocity.z += Mathf.Abs(Input.GetAxis("Vertical")) * Mathf.Abs(Input.GetAxis("Horizontal") * walkSpeed / 2.6);}
		//---------------
		
		transform.LookAt(Vector3(transform.position.x + velocity.x, transform.position.y, transform.position.z + velocity.z));
		
		if(nidan && Input.GetButtonDown("Jump")){
			velocity.y = jumpSpeed * 0.8;
			jumped = true;
			nidan = false;
		}
		
		if(spring){
			velocity.y = springSpeed;
			nidan = true;
			spring = false;
		}
		
		if(!Input.GetAxis("Horizontal")&&!Input.GetAxis("Vertical")){
			if(doki){
				velocity += Vector3(0.01, 0, 0);
				doki = false;
			}
			else {
				velocity -= Vector3(0.01, 0, 0);
				doki = true;
			}
		}
	}//isGrounded
	
	
	
	if(jumped){
		
		velocity.y -= gravity * Time.deltaTime * 0.4;
		
		if(velocity.y < 40.8){
			jumped = false;
			spring = false;
		}
		
	}else{
		
		velocity.y -= gravity * Time.deltaTime * 5.0;
		
	}
	controller.Move(velocity * Time.deltaTime);
}

function Reset ()
{
	gameObject.tag = "Player";
}