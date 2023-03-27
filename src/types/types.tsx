export interface Country {
	name: string;
	id: string;
	flag: string;
}
export interface News {
	status: string;
	articles: Article[];
	totalResults: number;
}
export interface Article {
	author: string;
	content: string | null;
	description: string | null;
	publishedAt: string;
	source: {
		id: string;
		name: string;
	};
	title: string;
	url: string;
	urlToImage: string | null;
}
export type ErrorMsg= {
	message:string
	status:number;
}
