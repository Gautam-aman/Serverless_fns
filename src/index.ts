export interface Env{

}

/*
export default {
	async fetch(request:Request, env : Env , ctx:ExecutionContext):Promise<Response>{
		console.log (request.body)
		console.log(request.headers)
		console.log(request.method)

		if (request.method == "GET"){
			return Response.json({
				message : "Response Sended Successfully"
			})
		}
		else{
			return Response.json({
				message : "Response not sended successfully"
			})
		}
	}
};

*/

export default {
	async fetch(request:Request, env : Env , ctx:ExecutionContext):Promise<Response>{
			return Response.json({
				message : "Aman Gautam is Great"
			})
		
	}
};
