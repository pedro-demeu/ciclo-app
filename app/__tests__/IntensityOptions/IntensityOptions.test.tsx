/* eslint-disable prettier/prettier */
import IntensityOptions from "../../components/IntensityOptions/IntensityOptions";
import { Intensity } from "../../contexts/FormData";
import { act, fireEvent, render } from "@testing-library/react-native";

describe("IntensityOptions - Unit Tests", () => {
  it("when intensity selected then next button should be visible", () => {
    const { getByText } = render(
      <IntensityOptions
        onBack={() => {}}
        onNext={() => {}}
        selectedValue={null}
        setSelectedValue={(intensity: Intensity) => {}}
      />
    );

    const nextButton = getByText(/continuar/i);
    expect(nextButton).not.toBeVisible();

    act(() => {
      fireEvent.press(getByText("Leve"));
    });

    expect(nextButton).toBeVisible();
  });
  it("should list correctly intensities", () => {
    const options = [
      "Leve",
      "Entre leve e moderado",
      "Moderado",
      "Entre moderado e intenso",
      "Intenso",
    ];

    const { getByText } = render(
      <IntensityOptions
        onBack={() => {}}
        onNext={() => {}}
        selectedValue={null}
        setSelectedValue={(intensity: Intensity) => {}}
      />
    );

    options.forEach((opt) => {
      expect(getByText(opt)).toBeVisible();
    });
  });
});
