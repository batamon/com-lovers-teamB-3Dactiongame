function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag =="Player"){
		Application.LoadLevel("Result");
	}
}