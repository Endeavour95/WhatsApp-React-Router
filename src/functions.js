// export const openWhatsAppDesktop = () => {
//     const microsoftStoreLink = 'https://www.microsoft.com/store/productId/9NKSQGP7F2NH?ocid=pdpshare';

//     window.open(microsoftStoreLink, '_blank');
// };

export const openWhatsAppDesktop = () => {
    return (dispatch) => {
        const microsoftStoreLink = 'https://www.microsoft.com/store/productId/9NKSQGP7F2NH?ocid=pdpshare';
        window.open(microsoftStoreLink, '_blank');
    };
};

