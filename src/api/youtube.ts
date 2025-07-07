import axios from 'axios';

export interface YouTubeVideo {
  title: string;
  thumbnail: string;
  url: string;
}

/**
 * Fetch top 3 YouTube tutorial videos for a given skill name.
 * @param skillName The skill to search for
 * @param apiKey Your YouTube Data API v3 key
 */
export async function fetchYouTubeTutorials(skillName: string, apiKey: string): Promise<YouTubeVideo[]> {
  const endpoint = 'https://www.googleapis.com/youtube/v3/search';
  const params = {
    part: 'snippet',
    q: `${skillName} tutorial`,
    type: 'video',
    maxResults: 3,
    key: apiKey,
    safeSearch: 'strict',
    videoEmbeddable: 'true',
  };

  const response = await axios.get(endpoint, { params });
  const items = response.data.items || [];

  return items.map((item: any) => ({
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  }));
} 