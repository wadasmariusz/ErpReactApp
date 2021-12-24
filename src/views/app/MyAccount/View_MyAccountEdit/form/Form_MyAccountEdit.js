import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useFakeMutation} from "app/hooks/@fakeDb/useFakeMutation";
import {InputText} from "components/form/text/Text/Input_Text";
import {Briefcase, Envelope, House, PinAngle, Telephone} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import {Link, useHistory} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {useQueryContext} from 'app/context/data/queries/QueryProvider';
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateMyAccount} from "app/crud/app/myAccount/updateMyAccount";
import {HookFormError} from "components/form/helpers/HookFormError";
import {Button} from "reactstrap";

const schema = yup.object().shape({
  name: yup.string().required(),
  nameFull: yup.string().nullable(),
  vatNo: yup.string().nullable(),
});

export const FormMyAccountEdit = () => {

  const {data} = useQueryContext();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {
      ...schema.default(),
      ...data,
    },
    resolver: yupResolver(schema),
  });

  const handleSuccess = () => {
    history.push(route['app.myAccount'])
  }

  const mutation = useHookFormMutation(methods, updateMyAccount, { handleSuccess });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <div className="row">
            <div className="col-12 pt-25">
              <HookFormError/>
            </div>
            <div className="col-12 col-lg-6 pt-25">
              <InputText
                required
                name="name"
                icon={<House size={SIZE_INPUT_ICON} />}
                label="Nazwa Firmy"
              />
            </div>
            <div className="col-12 col-lg-6 pt-25">
              <InputText
                name="nameFull"
                icon={<House size={SIZE_INPUT_ICON} />}
                label="Pełna nazwa firmy"
              />
            </div>
            <div className="col-12 col-lg-6 pt-25">
              <InputText
                name="vatNo"
                icon={<Briefcase size={SIZE_INPUT_ICON} />}
                label="VAT UE"
              />
            </div>
            <div className="col-12 text-right">
              <Button
                tag={Link}
                color="secondary"
                to={route['app.myAccount']}
              >
                Anuluj
              </Button>
              <InputSubmit className="ml-50" value="Zapisz" />
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
