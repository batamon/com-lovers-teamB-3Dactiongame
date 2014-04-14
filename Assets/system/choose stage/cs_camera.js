#pragma strict
static var looking_y : int;
static var looking_ym : int = 3;//nowlook_y  no saidai
static var looking_x : int;
static var looking_xm : int = 5;//nowlook_x  no saiddi
static var looking_obj : GameObject;
var debug : GameObject;

function Start () {

}

function Update () {
	
	if(Input.GetKeyDown("down")){
		if(looking_y == looking_ym){
			looking_y=0;
		}
		else{
		looking_y++;
		}
	}
	if(Input.GetKeyDown("up")){
		if(looking_y == 0){
			looking_y=looking_ym;
		}
		else{
		looking_y--;
		}
	}
	
	if(Input.GetKeyDown("right")){
		if(looking_x == looking_xm){
			looking_x=0;
		}
		else{
		looking_x++;
		}
	}
	if(Input.GetKeyDown("left")){
		if(looking_x == 0){
			looking_x=looking_xm;
		}
		else{
		looking_x--;
		}
	}
	
	if(looking_y == 3){
	transform.position.y = transform.position.y - (debug.transform.position.y) / 10;
	transform.position.x = transform.position.x - (debug.transform.position.x) / 10;
	looking_obj=debug;
	}
	else{
	transform.position.y = transform.position.y - (transform.position.y + looking_y) / 10;
	transform.position.x = transform.position.x - (transform.position.x - looking_x) / 10;
	}
}