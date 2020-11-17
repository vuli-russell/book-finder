export interface GoogleBooksResponse {
    items: GoogleBookItem[];
    kind: string;
    totalItems: number;
}

export interface GoogleBookItem {
    accessInfo: object;
    etag: string;
    kind: string;
    saleInfo: object;
    searchInfo: object;
    selfLink: string;
    volumeInfo: GoogleBookInfo;
}

export interface GoogleBookInfo {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {smallThumbnail: string;thumbnail: string;};
    industryIdentifiers: object[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: object;
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: object;
    subtitle: string;
    title: string;
}

export interface CleanedBookInfo {
    title: string;
    authors: string[];
    image: string;
    categories: string[];
    infoLink: string
    pageCount: number
}