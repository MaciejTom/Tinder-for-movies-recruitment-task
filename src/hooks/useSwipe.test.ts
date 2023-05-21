import { renderHook, act } from "@testing-library/react";
import { useSwipe } from "./useSwipe";
import { vi } from "vitest";

describe("useSwipe", () => {

  const onSwipedMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });


  it("should call onSwiped when touchStart and touchEnd are set", async () => {
    const { result } = renderHook(useSwipe, {
      initialProps: { onSwiped: onSwipedMock },
    });

    act(() => {
      const touchStartEvent = {
        targetTouches: [{ clientX: 50 }],
      };
      const touchMoveEvent = {
        targetTouches: [{ clientX: -110 }],
      };
      result.current.onTouchStart(touchStartEvent as any);
      result.current.onTouchMove(touchMoveEvent as any);
    });

    act(() => {
      result.current.onTouchEnd();
    });
    expect(onSwipedMock).toHaveBeenCalledTimes(1);
  });

    it("should call onSwiped when swiped right", () => {
      const { result } = renderHook(() => useSwipe({ onSwiped: onSwipedMock }));

      act(() => {
        const touchStartEvent = {
          targetTouches: [{ clientX: 50 }],
        };
        const touchMoveEvent = {
          targetTouches: [{ clientX: 110 }],
        };
        result.current.onTouchStart(touchStartEvent as any);
        result.current.onTouchMove(touchMoveEvent as any);
       
      });
      act(() => {
        result.current.onTouchEnd();
      });

      expect(onSwipedMock).toHaveBeenCalledTimes(1);
    });

    it("should not call onSwiped when swipe distance is less than minSwipeDistance", () => {
      const { result } = renderHook(() => useSwipe({ onSwiped: onSwipedMock }));

      act(() => {
        const touchStartEvent = {
          targetTouches: [{ clientX: 90 }],
        };
        const touchMoveEvent = {
          targetTouches: [{ clientX: 110 }],
        };
        result.current.onTouchStart(touchStartEvent as any);
        result.current.onTouchMove(touchMoveEvent as any);
      });
      act(() => {
        result.current.onTouchEnd();
      });

      expect(onSwipedMock).not.toHaveBeenCalled();
    });

    it("should not call onSwiped when touchEnd is not set", () => {
      const { result } = renderHook(() => useSwipe({ onSwiped: onSwipedMock }));

      act(() => {
        const touchStartEvent = {
          targetTouches: [{ clientX: 50 }],
        };
        result.current.onTouchStart(touchStartEvent as any);
      });
      act(() => {
        result.current.onTouchEnd();
      });

      expect(onSwipedMock).not.toHaveBeenCalled();
    });
});
