import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
    
// Add the new type for team members
export type TeamMember = {
    id: string;
    name: string;
    role: string;
    description: string;
    image: ImagePlaceholder;
    hiringSoon?: boolean;
}
