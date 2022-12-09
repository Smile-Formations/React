import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import TrackPage from "./TrackPage";
import * as trackService from "../../services/track/track";

jest.mock("../../services/track/track");

const renderWithRouter = (ui, path = "/", route = "/") => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path={path} element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe("TrackPage component", () => {
  beforeEach(() => {
    // @ts-ignore
    trackService.getTrack = jest.fn().mockReturnValue(Promise.resolve({
      "id": 1,
      "title": "Find The Real",
      "album": "One Day Remains",
      "band": "Alter Bridge",
      "year": "2004",
      "poster": "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
      "url": "https://www.youtube.com/watch?v=w9LZ0OkdxGg&ab_channel=AlterBridge-Topic",
      "category": 3,
      "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not fetch the track (Add mode)", async () => {
    render(<TrackPage />, { wrapper: MemoryRouter });
    expect(trackService.getTrack).not.toBeCalled();
  });

  it("should fetch the track (Edit mode)", async () => {
    await act(async () => {
      await renderWithRouter(<TrackPage />, "/track/:id", "/track/1");
    });
    expect(trackService.getTrack).toBeCalledWith("1");
  });

  it('should call the "updateTrack" method of the track service', async () => {
    jest.spyOn(trackService, "updateTrack");
    await act(async () => {
      await renderWithRouter(<TrackPage />, "/track/:id", "/track/1");
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(trackService.updateTrack).toBeCalled();
  });

  it('should call the "addTrack" method of the track service', async () => {
    jest.spyOn(trackService, "addTrack");
    await act(async () => {
      await render(<TrackPage />, { wrapper: MemoryRouter });
    });
    await act(async () => {
      await fireEvent.click(screen.getByText("Submit"));
    });
    expect(trackService.addTrack).toBeCalled();
  });
});
