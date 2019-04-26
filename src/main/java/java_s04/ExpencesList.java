package java_s04;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import beans.Post;
import dao.PostDAO;

/**
 * 部署関連のサービス実装。
 */
public class ExpencesList {
	private final PostDAO dao = new PostDAO();

	/**
	 * 一覧用に部署情報を全件取得する。
	 * @return 部署情報のリストをJSON形式で返す。
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Post> findAll() {
		return dao.findAll();
	}
}
