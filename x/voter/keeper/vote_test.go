package keeper_test

import (
	"testing"

	keepertest "github.com/coreators/voter/testutil/keeper"
	"github.com/coreators/voter/x/voter/keeper"
	"github.com/coreators/voter/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNVote(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Vote {
	items := make([]types.Vote, n)
	for i := range items {
		items[i].Id = keeper.AppendVote(ctx, items[i])
	}
	return items
}

func TestVoteGet(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNVote(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetVote(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestVoteRemove(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNVote(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVote(ctx, item.Id)
		_, found := keeper.GetVote(ctx, item.Id)
		require.False(t, found)
	}
}

func TestVoteGetAll(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNVote(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllVote(ctx))
}

func TestVoteCount(t *testing.T) {
	keeper, ctx := keepertest.VoterKeeper(t)
	items := createNVote(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetVoteCount(ctx))
}
