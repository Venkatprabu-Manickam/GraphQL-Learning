import { gql } from "@apollo/client";

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
      displayImage
    }
  }
`;

const IMAGE_LIST_FRAGMENT =  gql`
fragment ImageListFragment on Dog {
   images {
        url
        id
  }
}
`;

export const GET_DOGS_BY_BREED = gql`
query GetDogsByBreed($breed : String!) {
  dog(breed: $breed){
    id
    breed
    ...ImageListFragment
    subbreeds
  }
}
${IMAGE_LIST_FRAGMENT}
`;

