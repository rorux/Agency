import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/Menu";
import Side from "../../components/Side";
import Toolbar from "../../components/Toolbar";
import Firm from "../../components/Firm";
import Footer from "../../components/Footer";
import { getCompanyById } from "../../store/companies/actions";
import { getContactById } from "../../store/contacts/actions";
import { companiesSelector } from "../../store/companies/selectors";
import { contactsSelector } from "../../store/contacts/selectors";

function PageLayout() {
  const { company, loading: loadingCompany } = useSelector(companiesSelector);
  const { contact, loading: loadingContact } = useSelector(contactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyById("12"));
    dispatch(getContactById("16"));
  }, [dispatch]);

  return (
    <div className="main-wrap">
      <div className="content-wrap">
        <Menu />
        <Side />
        <div className="content">
          <Toolbar />
          <main>
            <div className="firm">
              {loadingCompany || loadingContact ? (
                "Загрузка данных..."
              ) : (
                <Firm company={company} contact={contact} />
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
