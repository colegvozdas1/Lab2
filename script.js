
	/*var attractions;
	fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d7f28c1-b3cb-41cc-b1ab-c42f5b62beeb/attractions.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210915T213217Z&X-Amz-Expires=86400&X-Amz-Signature=9551664d3e1481df4c345aaab2f3f134b5ce27b5b6630537dfb9109adf31a34f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22attractions.json%22')
		.then(response=>response.json())
		.then(data=>{
			var attractions=data;
			const e = document.querySelector('#attraction-category');
			e.addEventListener('change',(e)=> {
				e.value=e.target.value;
			})
			var filtered = attractions.filter(d=>d.Category===e.value)
					.sort(function(a,b){return b.Visitors-a.Visitors}).slice(0,5);
			renderBarChart(filtered);	
			//Yeah theres no way		
		}
		  
	)	*/
	var attractions;
	fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d7f28c1-b3cb-41cc-b1ab-c42f5b62beeb/attractions.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210915T213217Z&X-Amz-Expires=86400&X-Amz-Signature=9551664d3e1481df4c345aaab2f3f134b5ce27b5b6630537dfb9109adf31a34f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22attractions.json%22')
		.then(response=>response.json())
		.then(data=>{
			var attractions=data;
			let filtered = attractions.sort(function(a,b){return b.Visitors-a.Visitors})
			.slice(0,5); 
			renderBarChart(filtered);
		}
		)
	//This is me resigning to only have the 1 chart because
	//I couldn't figure out the button


	function filterData(category) {
	
	
	
		let filtered = attractions.filter(d=>d.Category===category)
			.sort(function(a,b){return b.Visitors-a.Visitors})
			.slice(0,5);
		return filtered;
		//attractions.filter(d=>d.Category===category).sort(function(a,b){return b-a}).slice(0,5);
		/* **************************************************
		 *
		 * TODO: filter attractions by the selected category
		 * TODO: filter top 5 attractions
		 *
		 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
		 *
		*/
		/*
		 *
		 * - 'data' must be an array of JSON objects
		 * - the max. length of 'data' is 5
		 *
		 * **************************************************/
	
	}