import data from "./data.json";

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image_filename?: string;
    video_url?: string;
    gallery_images?: string[];
    gallery_videos?: string[];
}

export interface PortfolioData {
    profile: typeof data.profile;
    projects: Project[];
    about_me_text: string;
}

export const portfolioData: PortfolioData = data as PortfolioData;
