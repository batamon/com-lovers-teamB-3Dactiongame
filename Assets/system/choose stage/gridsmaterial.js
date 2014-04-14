#pragma strict
var interval : float = 0.2;
private var timer : float = 0.0;
public var cleared : Material;
public var uncleared : Material;
public var non_playable : Material;
var clear : boolean = true;
var non_play : boolean = false;
private var originalColor : Color;

var chooselight : GameObject;

function Start ()
{
}
 
function Update ()
{
	if(clear){	
		renderer.material = cleared;
	}
	else{
		renderer.material = uncleared;
	}
   	if(non_play)
	{
		renderer.material = non_playable;
	}
	originalColor = renderer.material.color;
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Player") {
		/*timer -= Time.deltaTime;
    	if(timer < 0.0) {
			Instantiate(effect, transform.position, Random.rotation);
        	timer = interval;
     	}
		*/
		Instantiate(chooselight, chooselight.transform.position, chooselight.transform.rotation);
	}
}

function OnTriggerExit(other : Collider)
{
	if(other.gameObject.tag == "Player") {
		Destroy(chooselight);
	}
}
/*
function OnTriggerStay(other : Collider)
{
	if(other.gameObject.tag == "Player") {
		Destroy(chooselight);
	}
}*/