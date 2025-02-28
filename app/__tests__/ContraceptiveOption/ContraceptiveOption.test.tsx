/* eslint-disable prettier/prettier */
import ContraceptiveOption from "../../components/ContraceptiveOption/ContraceptiveOption";
import { fireEvent, render } from "@testing-library/react-native";

describe("ContraceptiveOption - Unit Tests", () => {
  it("when option selected then next button should be visible", () => {
    const { getByText } = render(
      <ContraceptiveOption
        onBack={() => {}}
        onNext={() => {}}
        setValue={(bool: boolean) => {}}
        value={null}
      />
    );

    const nextButton = getByText(/continuar/i);
    expect(nextButton).not.toBeVisible();

    fireEvent.press(getByText("Sim"));

    expect(nextButton).toBeVisible();
  });

  it("correct questions should be visible", () => {
    const { getByText } = render(
      <ContraceptiveOption
        onBack={() => {}}
        onNext={() => {}}
        setValue={(bool: boolean) => {}}
        value={null}
      />
    );

    expect(getByText("Você usa algum método contraceptivo?"));
  });
});
