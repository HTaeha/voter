package keeper_test

import (
	"testing"

	keepertest "github.com/coreators/voter/testutil/keeper"
	"github.com/coreators/voter/x/voter/keeper"
	"github.com/coreators/voter/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNPoll(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Poll {
	items := make([]types.Poll, n)
	for i := range items {
		items[i].Id = keeper.AppendPoll(ctx, items[i])
	}
	return items
}

func TestPollGet(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPoll(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestPollRemove(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePoll(ctx, item.Id)
		_, found := keeper.GetPoll(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPollGetAll(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllPoll(ctx))
}

func TestPollCount(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPollCount(ctx))
}
