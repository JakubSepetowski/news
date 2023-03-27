import { NewsListItem } from './NewsListItem';
import { NewTilesItem } from './NewTilesItem';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Article } from '../../types/types';

type Props = {
	articles: Article[];
	country: string | undefined;
};

export const NewsSection = (props: Props) => {
	const { articles } = props;
	const isList = useSelector((state: RootState) => state.newsMode.isList);
	const isDark = useSelector((state: RootState) => state.theme.isDark);

	return (
		<section className='min-h-screen p-4'>
			{props.country && (
				<h2 className='text-center mb-4 font-bold text-3xl '>
					Most Recent news for{' '}
					<span className={`${isDark ? 'text-dark-primary' : 'text-light-primary'}`}>
						{props.country.charAt(0).toUpperCase() + props.country.slice(1)}
					</span>
				</h2>
			)}
			{!props.country && (
				<h2 className='text-center mb-4 font-bold text-3xl'>
					the latest news from your{' '}
					<span className={` ${isDark ? 'text-dark-primary' : 'text-light-primary'}`}>
						backyard
					</span>
				</h2>
			)}
			<div
				className={`flex  items-center w-full  gap-5 ${
					isList ? 'flex-col ' : ' flex-wrap justify-center'
				}`}>
				{isList &&
					articles.map((article, i) => (
						<NewsListItem
							key={i}
							title={article.title}
							author={article.author}
							content={article.content}
							source={article.source.name}
							publishedAt={article.publishedAt}
							url={article.url}
						/>
					))}
				{!isList &&
					articles.map((article, i) => (
						<NewTilesItem
							key={i}
							title={article.title}
							source={article.source.name}
							author={article.author}
							content={article.content}
							publishedAt={article.publishedAt}
							url={article.url}
							description={article.description}
							urlToImage={article.urlToImage}
						/>
					))}
			</div>
		</section>
	);
};
