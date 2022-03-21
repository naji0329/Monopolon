import React from 'react';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTranslations';

const Layout = ({children}) => {
    const {t} = useTranslation();

    return(
        <div>
            <div>{children}</div>
        </div>
    )

}
export default withTrans(Layout);