import { MovieDb } from 'moviedb-promise';

if (!process.env.TMDB_API_KEY) {
  throw new Error('TMDB_API_KEY est requis dans le fichier .env');
}

const tmdb = new MovieDb(process.env.TMDB_API_KEY);

export async function findMoviePoster(title: string): Promise<string | null> {
  try {
    console.log(`Recherche TMDB pour: ${title}`);
    console.log(`Utilisation de la clé API: ${process.env.TMDB_API_KEY?.substring(0, 5)}...`);
    
    const searchResults = await tmdb.searchMovie({ query: title });
    console.log(`Résultats trouvés: ${searchResults.results?.length || 0}`);
    
    if (searchResults.results && searchResults.results.length > 0) {
      const movie = searchResults.results[0];
      if (movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      }
    }
    console.log(`Aucune image trouvée pour le film: ${title}`);
    return null;
  } catch (error) {
    console.error(`Erreur lors de la recherche du poster pour ${title}:`, error);
    return null;
  }
}